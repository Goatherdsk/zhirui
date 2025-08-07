#!/bin/bash

# 网站资源下载脚本
# 从目标网站下载图片、视频和提取内容

BASE_URL="http://zhirui.newmwyun.com/"
DOWNLOAD_DIR="/Users/liangpenglong/Desktop/study/zhirui"
IMAGES_DIR="${DOWNLOAD_DIR}/public/images/downloaded"
VIDEOS_DIR="${DOWNLOAD_DIR}/public/videos"

# 创建目录
mkdir -p "${IMAGES_DIR}"
mkdir -p "${VIDEOS_DIR}"

echo "开始下载网站资源..."
echo "目标网站: ${BASE_URL}"
echo "下载目录: ${DOWNLOAD_DIR}"

# 下载网站首页内容
echo "正在获取网站首页..."
curl -s -L "${BASE_URL}" > /tmp/website_content.html

if [ ! -s /tmp/website_content.html ]; then
    echo "无法获取网站内容"
    exit 1
fi

echo "网站内容已获取，开始分析..."

# 提取图片URL
echo "提取图片URL..."
grep -oE 'src="[^"]*\.(jpg|jpeg|png|gif|webp|bmp)[^"]*"' /tmp/website_content.html | sed 's/src="//g' | sed 's/"//g' > /tmp/image_urls.txt
grep -oE 'data-src="[^"]*\.(jpg|jpeg|png|gif|webp|bmp)[^"]*"' /tmp/website_content.html | sed 's/data-src="//g' | sed 's/"//g' >> /tmp/image_urls.txt

# 提取CSS背景图片
grep -oE 'background[^;]*url\([^)]*\.(jpg|jpeg|png|gif|webp|bmp)[^)]*\)' /tmp/website_content.html | sed 's/.*url(//g' | sed 's/).*//g' | sed 's/["\'"'"']//g' >> /tmp/image_urls.txt

# 提取视频URL
echo "提取视频URL..."
grep -oE 'src="[^"]*\.(mp4|webm|avi|mov|flv|m4v)[^"]*"' /tmp/website_content.html | sed 's/src="//g' | sed 's/"//g' > /tmp/video_urls.txt

# 下载图片
echo "开始下载图片..."
IMAGES_DOWNLOADED=0
while IFS= read -r url; do
    if [ ! -z "$url" ]; then
        # 处理相对URL
        if [[ $url == /* ]]; then
            full_url="${BASE_URL}${url#/}"
        elif [[ $url == http* ]]; then
            full_url="$url"
        else
            full_url="${BASE_URL}${url}"
        fi
        
        # 获取文件名
        filename=$(basename "$url")
        if [ -z "$filename" ] || [[ "$filename" != *.* ]]; then
            filename="image_$(date +%s)_${RANDOM}.jpg"
        fi
        
        echo "下载图片: $filename"
        if curl -s -L --max-time 30 "$full_url" -o "${IMAGES_DIR}/${filename}"; then
            if [ -s "${IMAGES_DIR}/${filename}" ]; then
                echo "✓ 下载成功: $filename"
                ((IMAGES_DOWNLOADED++))
            else
                echo "✗ 下载失败: $filename (文件为空)"
                rm -f "${IMAGES_DIR}/${filename}"
            fi
        else
            echo "✗ 下载失败: $filename"
        fi
        sleep 1
    fi
done < /tmp/image_urls.txt

# 下载视频
echo "开始下载视频..."
VIDEOS_DOWNLOADED=0
while IFS= read -r url; do
    if [ ! -z "$url" ]; then
        # 处理相对URL
        if [[ $url == /* ]]; then
            full_url="${BASE_URL}${url#/}"
        elif [[ $url == http* ]]; then
            full_url="$url"
        else
            full_url="${BASE_URL}${url}"
        fi
        
        # 获取文件名
        filename=$(basename "$url")
        if [ -z "$filename" ] || [[ "$filename" != *.* ]]; then
            filename="video_$(date +%s)_${RANDOM}.mp4"
        fi
        
        echo "下载视频: $filename"
        if curl -s -L --max-time 60 "$full_url" -o "${VIDEOS_DIR}/${filename}"; then
            if [ -s "${VIDEOS_DIR}/${filename}" ]; then
                echo "✓ 下载成功: $filename"
                ((VIDEOS_DOWNLOADED++))
            else
                echo "✗ 下载失败: $filename (文件为空)"
                rm -f "${VIDEOS_DIR}/${filename}"
            fi
        else
            echo "✗ 下载失败: $filename"
        fi
        sleep 2
    fi
done < /tmp/video_urls.txt

# 提取文案内容
echo "提取网站文案..."
cat > "${DOWNLOAD_DIR}/extracted_content.txt" << EOF
=== 智锐商务车网站内容提取 ===
提取时间: $(date)
源网站: ${BASE_URL}

=== 网站标题 ===
$(grep -oE '<title[^>]*>[^<]*</title>' /tmp/website_content.html | sed 's/<[^>]*>//g')

=== 主要标题 ===
$(grep -oE '<h[1-6][^>]*>[^<]*</h[1-6]>' /tmp/website_content.html | sed 's/<[^>]*>//g' | head -20)

=== 导航菜单 ===
$(grep -A 5 -B 5 -i 'nav\|menu\|导航' /tmp/website_content.html | grep -oE '>[^<>]{2,}[\\u4e00-\\u9fa5]+[^<>]*<' | sed 's/[><]//g' | head -20)

=== 主要文本内容 ===
$(grep -oE '<p[^>]*>[^<]*</p>' /tmp/website_content.html | sed 's/<[^>]*>//g' | grep -v '^[[:space:]]*$' | head -30)

=== 产品相关信息 ===
$(grep -i -oE '[^>]*[产品|车型|型号|配置|参数|价格][^<]*' /tmp/website_content.html | head -20)

EOF

# 生成资源清单
cat > "${DOWNLOAD_DIR}/resource_inventory.json" << EOF
{
  "extraction_date": "$(date -Iseconds)",
  "source_website": "${BASE_URL}",
  "statistics": {
    "images_downloaded": ${IMAGES_DOWNLOADED},
    "videos_downloaded": ${VIDEOS_DOWNLOADED}
  },
  "directories": {
    "images": "public/images/downloaded/",
    "videos": "public/videos/"
  },
  "files": {
    "content": "extracted_content.txt",
    "inventory": "resource_inventory.json"
  }
}
EOF

# 清理临时文件
rm -f /tmp/website_content.html /tmp/image_urls.txt /tmp/video_urls.txt

echo ""
echo "=== 下载完成 ==="
echo "图片下载: ${IMAGES_DOWNLOADED} 个"
echo "视频下载: ${VIDEOS_DOWNLOADED} 个"
echo "文案内容: ${DOWNLOAD_DIR}/extracted_content.txt"
echo "资源清单: ${DOWNLOAD_DIR}/resource_inventory.json"
echo ""
echo "下载的文件存储在:"
echo "  图片: ${IMAGES_DIR}"
echo "  视频: ${VIDEOS_DIR}"
