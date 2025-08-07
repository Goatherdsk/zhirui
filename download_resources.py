#!/usr/bin/env python3
"""
网站资源下载脚本
从目标网站下载所有图片、视频和提取文案
"""

import requests
import os
import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

class WebsiteResourceDownloader:
    def __init__(self, base_url, download_dir):
        self.base_url = base_url
        self.download_dir = download_dir
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
        # 创建下载目录
        self.images_dir = os.path.join(download_dir, 'public', 'images', 'downloaded')
        self.videos_dir = os.path.join(download_dir, 'public', 'videos')
        self.content_file = os.path.join(download_dir, 'extracted_content.json')
        
        os.makedirs(self.images_dir, exist_ok=True)
        os.makedirs(self.videos_dir, exist_ok=True)
    
    def get_page_content(self, url):
        """获取页面内容"""
        try:
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            response.encoding = 'utf-8'
            return response.text
        except Exception as e:
            print(f"获取页面失败 {url}: {e}")
            return None
    
    def download_file(self, url, filename, file_type="image"):
        """下载文件"""
        try:
            response = self.session.get(url, timeout=30, stream=True)
            response.raise_for_status()
            
            # 确定保存目录
            save_dir = self.images_dir if file_type == "image" else self.videos_dir
            filepath = os.path.join(save_dir, filename)
            
            # 检查文件是否已存在
            if os.path.exists(filepath):
                print(f"文件已存在: {filename}")
                return filepath
            
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            
            print(f"下载完成: {filename}")
            return filepath
            
        except Exception as e:
            print(f"下载失败 {url}: {e}")
            return None
    
    def extract_media_urls(self, html_content, base_url):
        """提取页面中的所有媒体URL"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        media_urls = {
            'images': [],
            'videos': [],
            'backgrounds': []
        }
        
        # 提取图片
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src')
            if src:
                full_url = urljoin(base_url, src)
                media_urls['images'].append({
                    'url': full_url,
                    'alt': img.get('alt', ''),
                    'title': img.get('title', '')
                })
        
        # 提取视频
        for video in soup.find_all('video'):
            src = video.get('src')
            if src:
                full_url = urljoin(base_url, src)
                media_urls['videos'].append({
                    'url': full_url,
                    'poster': video.get('poster', '')
                })
            
            # 检查 source 标签
            for source in video.find_all('source'):
                src = source.get('src')
                if src:
                    full_url = urljoin(base_url, src)
                    media_urls['videos'].append({
                        'url': full_url,
                        'type': source.get('type', '')
                    })
        
        # 提取CSS背景图片
        style_tags = soup.find_all('style')
        for style in style_tags:
            if style.string:
                bg_images = re.findall(r'background-image:\s*url\(["\']?([^"\']+)["\']?\)', style.string)
                for bg_img in bg_images:
                    full_url = urljoin(base_url, bg_img)
                    media_urls['backgrounds'].append(full_url)
        
        # 提取内联样式中的背景图片
        for element in soup.find_all(style=True):
            style_attr = element.get('style')
            if 'background' in style_attr:
                bg_images = re.findall(r'background[^:]*:\s*[^;]*url\(["\']?([^"\']+)["\']?\)', style_attr)
                for bg_img in bg_images:
                    full_url = urljoin(base_url, bg_img)
                    media_urls['backgrounds'].append(full_url)
        
        return media_urls
    
    def extract_text_content(self, html_content):
        """提取页面文案内容"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # 移除script和style标签
        for script in soup(["script", "style"]):
            script.decompose()
        
        content = {
            'title': '',
            'headings': [],
            'paragraphs': [],
            'navigation': [],
            'product_info': [],
            'company_info': []
        }
        
        # 提取标题
        title_tag = soup.find('title')
        if title_tag:
            content['title'] = title_tag.get_text().strip()
        
        # 提取各级标题
        for h in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
            content['headings'].append({
                'level': h.name,
                'text': h.get_text().strip()
            })
        
        # 提取段落
        for p in soup.find_all('p'):
            text = p.get_text().strip()
            if text and len(text) > 10:  # 过滤掉太短的文本
                content['paragraphs'].append(text)
        
        # 提取导航文本
        nav_selectors = ['nav', '.nav', '.menu', '.navigation']
        for selector in nav_selectors:
            elements = soup.select(selector)
            for nav in elements:
                links = nav.find_all('a')
                for link in links:
                    text = link.get_text().strip()
                    href = link.get('href', '')
                    if text:
                        content['navigation'].append({
                            'text': text,
                            'href': href
                        })
        
        # 提取产品相关信息
        product_keywords = ['产品', '车型', '型号', '配置', '参数', '价格']
        for keyword in product_keywords:
            elements = soup.find_all(text=re.compile(keyword))
            for element in elements:
                parent = element.parent
                if parent:
                    text = parent.get_text().strip()
                    if text and len(text) > 5:
                        content['product_info'].append(text)
        
        # 提取公司信息
        company_elements = soup.find_all(text=re.compile(r'(公司|企业|集团|有限|股份)'))
        for element in company_elements:
            parent = element.parent
            if parent:
                text = parent.get_text().strip()
                if text and len(text) > 5:
                    content['company_info'].append(text)
        
        return content
    
    def get_filename_from_url(self, url):
        """从URL获取文件名"""
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path)
        
        if not filename or '.' not in filename:
            # 如果没有文件名，生成一个
            import hashlib
            url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
            
            # 根据URL猜测文件扩展名
            if any(ext in url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp']):
                for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp']:
                    if ext in url.lower():
                        filename = f"image_{url_hash}{ext}"
                        break
            elif any(ext in url.lower() for ext in ['.mp4', '.webm', '.avi', '.mov']):
                for ext in ['.mp4', '.webm', '.avi', '.mov']:
                    if ext in url.lower():
                        filename = f"video_{url_hash}{ext}"
                        break
            else:
                filename = f"file_{url_hash}"
        
        return filename
    
    def download_all_resources(self):
        """下载所有资源"""
        print(f"开始下载 {self.base_url} 的资源...")
        
        # 获取主页内容
        html_content = self.get_page_content(self.base_url)
        if not html_content:
            print("无法获取网站内容")
            return
        
        # 提取媒体URL
        media_urls = self.extract_media_urls(html_content, self.base_url)
        
        # 提取文案内容
        text_content = self.extract_text_content(html_content)
        
        downloaded_files = {
            'images': [],
            'videos': [],
            'content': text_content
        }
        
        # 下载图片
        print(f"\n找到 {len(media_urls['images'])} 张图片")
        for i, img_info in enumerate(media_urls['images']):
            print(f"下载图片 {i+1}/{len(media_urls['images'])}: {img_info['url']}")
            filename = self.get_filename_from_url(img_info['url'])
            filepath = self.download_file(img_info['url'], filename, "image")
            if filepath:
                downloaded_files['images'].append({
                    'original_url': img_info['url'],
                    'filename': filename,
                    'local_path': filepath,
                    'alt': img_info.get('alt', ''),
                    'title': img_info.get('title', '')
                })
            time.sleep(0.5)  # 避免请求过快
        
        # 下载背景图片
        print(f"\n找到 {len(media_urls['backgrounds'])} 张背景图片")
        for i, bg_url in enumerate(media_urls['backgrounds']):
            print(f"下载背景图片 {i+1}/{len(media_urls['backgrounds'])}: {bg_url}")
            filename = self.get_filename_from_url(bg_url)
            filepath = self.download_file(bg_url, filename, "image")
            if filepath:
                downloaded_files['images'].append({
                    'original_url': bg_url,
                    'filename': filename,
                    'local_path': filepath,
                    'type': 'background'
                })
            time.sleep(0.5)
        
        # 下载视频
        print(f"\n找到 {len(media_urls['videos'])} 个视频")
        for i, video_info in enumerate(media_urls['videos']):
            print(f"下载视频 {i+1}/{len(media_urls['videos'])}: {video_info['url']}")
            filename = self.get_filename_from_url(video_info['url'])
            filepath = self.download_file(video_info['url'], filename, "video")
            if filepath:
                downloaded_files['videos'].append({
                    'original_url': video_info['url'],
                    'filename': filename,
                    'local_path': filepath,
                    'type': video_info.get('type', '')
                })
            time.sleep(1)  # 视频文件较大，间隔长一些
        
        # 保存内容信息
        with open(self.content_file, 'w', encoding='utf-8') as f:
            json.dump(downloaded_files, f, ensure_ascii=False, indent=2)
        
        print(f"\n下载完成!")
        print(f"图片: {len(downloaded_files['images'])} 个")
        print(f"视频: {len(downloaded_files['videos'])} 个")
        print(f"内容信息已保存到: {self.content_file}")
        
        return downloaded_files

if __name__ == "__main__":
    base_url = "http://zhirui.newmwyun.com/"
    download_dir = "/Users/liangpenglong/Desktop/study/zhirui"
    
    downloader = WebsiteResourceDownloader(base_url, download_dir)
    downloader.download_all_resources()
