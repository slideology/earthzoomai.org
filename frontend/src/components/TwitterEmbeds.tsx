import React, { useEffect } from 'react';

/**
 * TwitterEmbeds组件 - 嵌入推特内容展示用户反馈
 * 
 * 功能：
 * 1. 动态加载推特嵌入脚本
 * 2. 展示用户对ZOOM EARTH AI的推特反馈
 * 3. 提供社交媒体互动入口
 */
const TwitterEmbeds: React.FC = () => {
  useEffect(() => {
    // 动态加载推特嵌入脚本
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    
    document.head.appendChild(script);
    
    return () => {
      // 清理脚本
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Share Your Experience with ZOOM EARTH AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Love using ZOOM EARTH AI? See what our users are saying on Twitter with #ZoomEarthAI!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Twitter嵌入示例 - 实际使用时需要替换为真实的推特ID */}
          
          {/* 推特嵌入1 - 教育用户反馈 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">@</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">@EduTechPro</h3>
                <p className="text-gray-400 text-sm">Education Technology Expert</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "ZOOM EARTH AI has revolutionized how we teach scale and perspective in our geography classes. Students are absolutely mesmerized by the zoom-out effects! #ZoomEarthAI #EdTech"
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>💙 127</span>
              <span>🔄 43</span>
              <span>💬 18</span>
            </div>
          </div>

          {/* 推特嵌入2 - 创作者反馈 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">@</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">@CreativeStudio</h3>
                <p className="text-gray-400 text-sm">Digital Artist</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "Just created the most amazing video sequence with ZOOM EARTH AI! From a close-up of my artwork to seeing Earth from space - mind blown! 🤯 #ZoomEarthAI #DigitalArt"
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>💙 89</span>
              <span>🔄 32</span>
              <span>💬 12</span>
            </div>
          </div>

          {/* 推特嵌入3 - 营销专家反馈 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">@</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">@MarketingGuru</h3>
                <p className="text-gray-400 text-sm">Marketing Strategist</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "Our latest campaign video using ZOOM EARTH AI got 300% more engagement than usual! The zoom-out effect is absolutely captivating. Game changer! #ZoomEarthAI #Marketing"
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>💙 156</span>
              <span>🔄 67</span>
              <span>💬 24</span>
            </div>
          </div>
        </div>

        {/* 社交媒体行动号召 */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Join the conversation and share your ZOOM EARTH AI creations!</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://twitter.com/intent/tweet?text=Check%20out%20my%20amazing%20zoom%20video%20created%20with%20ZOOM%20EARTH%20AI!%20%23ZoomEarthAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Share on Twitter
            </a>
            <a 
              href="https://twitter.com/search?q=%23ZoomEarthAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              View #ZoomEarthAI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterEmbeds;
