import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsletterSubscribe from '../components/NewsletterSubscribe';

/**
 * ZOOM EARTH AI Single Page Application Homepage
 * Integrates all features: Hero, Features, Showcase, Reviews, FAQ
 * Reference structure from https://zoomearthai.com/
 */
const HomePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  
  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 滚动进入视口动画
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));
    
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // FAQ结构化数据
  React.useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does ZOOM EARTH AI create the zoom-out effect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZOOM EARTH AI uses advanced artificial intelligence to analyze your image and create seamless zoom-out sequences. Our 4-layer AI architecture analyzes depth, plans optimal paths, generates intermediate frames, and synthesizes professional-quality videos automatically."
          }
        },
        {
          "@type": "Question",
          "name": "What types of images work best with ZOOM EARTH AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For optimal results, use high-resolution images (1920x1080 or higher) with clear subjects and good composition. Images with distinct focal points, rich details, and contrasting elements work best. We support JPG, PNG, WebP formats up to 50MB."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ZOOM EARTH AI different from other video effects tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike traditional video effects, ZOOM EARTH AI uses proprietary AI algorithms to create infinite zoom capabilities with unprecedented visual continuity. Our technology automatically handles complex depth analysis and content generation for professional results."
          }
        },
        {
          "@type": "Question",
          "name": "How can I optimize my content for different platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZOOM EARTH AI offers optimized export presets for all major platforms: vertical videos for TikTok and Instagram Reels, landscape format for YouTube, and custom aspect ratios. All outputs maintain perfect quality across platforms."
          }
        },
        {
          "@type": "Question",
          "name": "How does ZOOM EARTH AI handle data privacy and security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain enterprise-grade security with SOC 2 Type II compliance. All uploads are encrypted with AES-256, processed in secure environments, and automatically deleted after 30 days. We're GDPR compliant with EU data residency options."
          }
        },
        {
          "@type": "Question",
          "name": "What support resources does ZOOM EARTH AI provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive support including 24/7 live chat, video tutorials, technical documentation, community forum, and webinar training sessions. Professional plans include dedicated support with 4-hour response time."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('"@type": "FAQPage"')) {
          script.remove();
        }
      });
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 pt-40 overflow-hidden min-h-screen flex items-center">
        {/* 背景效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/images/earth-zoom/backgrounds/stars-texture.png')] opacity-20"></div>
        
        {/* 视差背景效果 */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        {/* 动态背景粒子效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* 主标题 */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight animate-fade-in">
              ZOOM EARTH AI
            </h1>
              
            {/* 副标题 */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              Transform your photos into stunning cinematic zoom-out sequences from Earth to space. Create viral-worthy content in seconds.
              </p>
              
            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <a href="https://pollo.ai?ref=ytayndd" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Start Creating Now
              </a>
              <a href="https://pollo.ai?ref=ytayndd" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:border-gray-300 px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300">
                View Examples
              </a>
            </div>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-blue-400 mr-2">⚡</span>
                60-Second Processing
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-purple-400 mr-2">🤖</span>
                AI-Powered
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-green-400 mr-2">📱</span>
                Multi-Platform
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-yellow-400 mr-2">🎯</span>
                Viral Ready
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section id="showcase" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Check out these amazing transformations created with our AI
              </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-on-scroll">
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/showcase/landmark-transition.webp" 
                  alt="Landmark Transition - From street view to satellite perspective"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Landmark Transition</h3>
              <p className="text-gray-400">From street view to satellite perspective</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/showcase/creative-effects.webp" 
                  alt="Creative Effects - Artistic zoom sequences with style"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Creative Effects</h3>
              <p className="text-gray-400">Artistic zoom sequences with style</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/showcase/advanced-features.webp" 
                  alt="Advanced Features - Professional-grade zoom capabilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Advanced Features</h3>
              <p className="text-gray-400">Professional-grade zoom capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Transform Your Content with Zoom Earth AI
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Experience the next generation of Earth zoom-out effects with our comprehensive suite of professional features. From advanced AI processing to seamless satellite integration, Zoom Earth AI provides everything you need to create stunning visual content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* AI-Powered Processing */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🤖</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">AI-Powered Processing</h3>
              <p className="text-gray-400 leading-relaxed">
                Zoom Earth AI leverages cutting-edge artificial intelligence to analyze and process your images. Our advanced neural networks understand depth, perspective, and spatial relationships to create seamless transitions from ground to space. Experience the power of machine learning in every zoom sequence.
              </p>
            </div>
            
            {/* Real-Time Rendering */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">⚡</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">Real-Time Rendering</h3>
              <p className="text-gray-400 leading-relaxed">
                Watch your Earth zoom-out effects come to life in real-time. Our optimized processing pipeline delivers results in under 60 seconds, without compromising on quality. Perfect for content creators who need quick turnaround times while maintaining professional standards.
              </p>
            </div>
            
            {/* Advanced Satellite Integration */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🛰️</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Advanced Satellite Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamlessly blend your ground-level photos with actual satellite imagery using our proprietary technology. Zoom Earth AI matches terrain, lighting, and atmospheric conditions to create ultra-realistic transitions that captivate viewers and maintain perfect continuity.
              </p>
            </div>
            
            {/* Customizable Effects */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🎨</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">Customizable Effects</h3>
              <p className="text-gray-400 leading-relaxed">
                Take control of your creative vision with extensive customization options. Adjust zoom speed, transition styles, atmospheric effects, time-of-day lighting, cloud coverage, and camera movements. Create unique and engaging content that stands out on any platform.
              </p>
            </div>
            
            {/* Multi-Platform Export */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">📱</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">Multi-Platform Export</h3>
              <p className="text-gray-400 leading-relaxed">
                Share your content everywhere with our optimized export presets. Whether it's vertical videos for TikTok and Instagram Reels, landscape format for YouTube, or custom aspect ratios for specific needs, Zoom Earth AI ensures your content looks perfect on every platform.
              </p>
            </div>
            
            {/* Enterprise-Grade Security */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 animate-on-scroll" style={{animationDelay: '0.5s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🔒</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">Enterprise-Grade Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Trust in our robust security infrastructure to protect your content. With end-to-end encryption, secure cloud processing, and automatic data cleanup, your creative assets are always safe. We maintain strict compliance with global privacy regulations and industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section id="reviews" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of creators who have transformed their content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* User Review 1 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  SC
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Sarah Chen</h3>
                  <p className="text-gray-400 text-sm">Social Media Creator</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The Earth zoom out effect transformed my content! My TikTok views increased by 300% after using this AI tool. Absolutely phenomenal results."
              </p>
            </div>
            
            {/* User Review 2 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Michael Rodriguez</h3>
                  <p className="text-gray-400 text-sm">Professional Photographer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As a professional photographer, I'm amazed by the quality. The 4K output is crystal clear and the depth mapping is incredibly accurate."
              </p>
            </div>
            
            {/* User Review 3 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  ET
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Emma Thompson</h3>
                  <p className="text-gray-400 text-sm">Marketing Expert</p>
                </div>
              </div>
              <p className="text-gray-300">
                "This tool has become essential for our marketing campaigns. The quick processing time and professional results are exactly what we needed."
              </p>
            </div>
            
            {/* User Review 4 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                  DK
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">David Kim</h3>
                  <p className="text-gray-400 text-sm">Video Producer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The cinematic quality of the zoom transitions is mind-blowing. It's like having a professional VFX team at your fingertips."
              </p>
            </div>
            
            {/* User Review 5 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  LW
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Lisa Wang</h3>
                  <p className="text-gray-400 text-sm">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Our engagement rates skyrocketed after incorporating these effects. The ease of use and quick rendering make it perfect for daily content."
              </p>
            </div>
            
            {/* User Review 6 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  JA
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">James Anderson</h3>
                  <p className="text-gray-400 text-sm">YouTuber</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Finally, a tool that delivers professional results without the complexity. The AI understanding of depth and perspective is remarkable."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 relative bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Everything About Zoom Earth AI
            </h2>
            <p className="text-xl text-gray-400">
              Detailed answers to your questions about our Earth zoom-out effect generator
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "How does ZOOM EARTH AI create the zoom-out effect?",
                answer: "ZOOM EARTH AI uses advanced artificial intelligence to analyze your image and create seamless zoom-out sequences. Our 4-layer AI architecture analyzes depth, plans optimal paths, generates intermediate frames, and synthesizes professional-quality videos automatically."
              },
              {
                question: "What types of images work best with ZOOM EARTH AI?",
                answer: "For optimal results, use high-resolution images (1920x1080 or higher) with clear subjects and good composition. Images with distinct focal points, rich details, and contrasting elements work best. We support JPG, PNG, WebP formats up to 50MB."
              },
              {
                question: "What makes ZOOM EARTH AI different from other video effects tools?",
                answer: "Unlike traditional video effects, ZOOM EARTH AI uses proprietary AI algorithms to create infinite zoom capabilities with unprecedented visual continuity. Our technology automatically handles complex depth analysis and content generation for professional results."
              },
              {
                question: "How can I optimize my content for different platforms?",
                answer: "ZOOM EARTH AI offers optimized export presets for all major platforms: vertical videos for TikTok and Instagram Reels, landscape format for YouTube, and custom aspect ratios. All outputs maintain perfect quality across platforms."
              },
              {
                question: "How does ZOOM EARTH AI handle data privacy and security?",
                answer: "We maintain enterprise-grade security with SOC 2 Type II compliance. All uploads are encrypted with AES-256, processed in secure environments, and automatically deleted after 30 days. We're GDPR compliant with EU data residency options."
              },
              {
                question: "What support resources does ZOOM EARTH AI provide?",
                answer: "We offer comprehensive support including 24/7 live chat, video tutorials, technical documentation, community forum, and webinar training sessions. Professional plans include dedicated support with 4-hour response time."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-4 bg-gray-800 rounded-xl animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-gray-700 transition-colors rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white flex items-center justify-between">
                    {faq.question}
                    <span className="text-2xl text-gray-400 transition-transform duration-300" style={{transform: openFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)'}}>
                      +
                    </span>
                  </h3>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
              </div>
                )}
              </div>
            ))}
          </div>
                </div>
      </section>

      {/* 在页面底部添加订阅区块 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <NewsletterSubscribe />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
