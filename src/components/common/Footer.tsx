import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const navigation = [
  { name: '홈', href: '/' },
  { name: '회사소개', href: '/about' },
  { name: '사업영역', href: '/services' },
  { name: '성과사례', href: '/case-studies' },
  { name: '팀원소개', href: '/team' },
  { name: '협력사', href: '/partners' },
  { name: '문의하기', href: '/contact' },
]

const services = [
  { name: 'AddKick', href: '/services#addkick' },
  { name: '디지털 마케팅', href: '/services#digital' },
  { name: '해외 진출 컨설팅', href: '/services#consulting' },
  { name: 'Renpick', href: '/services#renpick' },
]



export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/gooddeal-logo-footer.png" 
                alt="굿딜파트너 로고" 
                className="h-60 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              한국을 넘어 민간 KOTRA를 꿈꾸는 글로벌 광고 업계의 해답. 
              마케팅 전문 법인으로서 한국 기업의 해외 진출을 성공시킵니다.
            </p>
            
            {/* 연락처 정보 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a 
                  href="mailto:sqdhs@naver.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  sqdhs@naver.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a 
                  href="tel:0504-080-4769" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  0504-080-4769
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  경남 창원시 의창구 자룡로 48번길, 44
                </span>
              </div>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 GoodDeal Partners. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 