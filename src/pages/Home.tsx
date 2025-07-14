import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Target, 
  ArrowRight, 
  Play,
  CheckCircle,
  Star
} from 'lucide-react'
import SEO from '../components/common/SEO'

// 실시간 성과 데이터
const realTimeData = [
  {
    country: '🇻🇳',
    industry: 'K뷰티 브랜드',
    growth: '+340%',
    channel: '틱톡 파트너 15명 협업',
    timeAgo: '3분 전 업데이트'
  },
  {
    country: '🇯🇵',
    industry: '패션 M사',
    growth: '+250%',
    channel: '유튜브 패션 채널 8곳',
    timeAgo: '7분 전 업데이트'
  },
  {
    country: '🇹🇭',
    industry: '레스토랑 R사',
    growth: '+180%',
    channel: '현지 푸드 파트너 12명',
    timeAgo: '12분 전 업데이트'
  }
]

const stats = [
  { label: '고객 만족도', value: '95%', icon: Star },
  { label: '평균 ROI 개선', value: '300%', icon: TrendingUp },
  { label: '평균 분석 시간', value: '30초', icon: Target },
  { label: '성공 프로젝트', value: '100+', icon: CheckCircle },
]

const liveStats = [
  { label: '진행 중 프로젝트', value: '47개' },
  { label: '활성 파트너사', value: '283개' },
  { label: '진출 국가', value: '5개국' },
]

export default function Home() {
  const [currentDataIndex, setCurrentDataIndex] = useState(0)

  // 실시간 데이터 업데이트 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataIndex((prev) => (prev + 1) % realTimeData.length)
    }, 30000) // 30초마다 업데이트

    return () => clearInterval(interval)
  }, [])

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "굿딜파트너",
    "alternateName": "GoodDeal Partners",
    "url": "https://gooddealpartner.com",
    "logo": "https://gooddealpartner.com/gooddeal_logo.png",
    "description": "한국을 넘어 민간 KOTRA를 꿈꾸는 글로벌 광고 업계의 해답. AI 기반 디지털 마케팅 솔루션 제공.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
              "url": "https://gooddealpartner.com/contact"
    },
    "sameAs": []
  }

  return (
    <div className="overflow-hidden">
      <SEO 
        title="실시간 성과 창출 중"
        description="전 세계 고객들이 굿딜파트너와 함께 실시간으로 성과를 만들어가고 있습니다. AI 기반 디지털 마케팅으로 평균 ROI 300% 개선, 95% 고객 만족도를 달성하세요."
        keywords="굿딜파트너, 굿딜 파트너, gooddeal, gooddeal partner, gooddealpartner, good deal partner, 민간 KOTRA, 민간 코트라, 실시간 성과, 디지털 마케팅, ROI 300%, 해외 진출, 마케팅 성과, AddKick, 글로벌 마케팅, AI 마케팅, 마케팅 대행, 해외 마케팅, 아시아 마케팅, 마케팅 컨설팅"
        ogTitle="굿딜파트너 - 지금 이 순간도 성과가 만들어지고 있습니다"
                  ogDescription="전 세계 고객들과 함께 실시간으로 만들어지는 마케팅 성과를 확인하세요. 평균 ROI 300% 개선, 47개 진행 프로젝트, 5개국 진출 성공."
        canonicalUrl="https://gooddealpartner.com/"
        jsonLd={organizationJsonLd}
      />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/background-building.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 메인 콘텐츠 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="heading-1 text-white mb-6">
                지금 이 순간도<br />
                <span className="text-accent">성과가 만들어지고</span><br />
                있습니다
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                전 세계 고객들이 굿딜파트너와 함께<br />
                실시간으로 성과를 만들어가고 있습니다
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-accent text-white border-2 border-accent text-lg px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent hover:border-white transition-colors duration-300"
                >
                  무료 상담 받기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center bg-primary text-white border-2 border-primary text-lg px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-white transition-colors duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  성과 사례 보기
                </Link>
              </div>

              {/* 실시간 통계 */}
              <div className="grid grid-cols-3 gap-4">
                {liveStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 실시간 성과 피드 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    실시간 성과 피드
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-500 font-medium">LIVE</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {realTimeData.map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: index === currentDataIndex ? 1 : 0.6,
                        y: 0,
                        scale: index === currentDataIndex ? 1.02 : 1
                      }}
                      className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                        index === currentDataIndex 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{data.country}</span>
                          <span className="font-medium text-gray-900">
                            {data.industry}
                          </span>
                        </div>
                        <div className="text-xl font-bold text-accent">
                          {data.growth}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {data.channel}
                      </p>
                      <p className="text-xs text-gray-500">
                        {data.timeAgo}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 주요 성과 지표 Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-gray-900 mb-6">
              검증된 성과로 증명하는 <span className="text-primary">전문성</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              데이터로 말하는 굿딜파트너의 성과. 고객의 성공이 곧 우리의 성과입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 소개 요약 Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-gray-900 mb-6">
                한국을 넘어 <span className="text-primary">민간 KOTRA</span>를<br />
                꿈꾸는 광고 업계의 해답
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                굿딜파트너는 마케팅 전문 법인으로서 한국 기업의 해외 진출을 성공시키는 
                파트너입니다. AI 기반 광고 솔루션과 현지 마케팅 네트워크를 통해 
                실질적인 성과를 만들어냅니다.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  '마케팅 동료를 찾지 못해 폐업하는 소상공인들의 해결사',
                  '상호명 검색만으로 복잡한 마케팅으로부터의 해방',
                  '예산은 쓰는데 성과는 모르는 깜깜이 마케팅 해결',
                  '해외 진출 채널 확보'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="btn-primary"
              >
                회사 더 알아보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <Globe className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">글로벌 네트워크</h4>
                    <p className="text-sm text-gray-600">아시아 5개국 현지 파트너</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <Target className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">정확한 타겟팅</h4>
                    <p className="text-sm text-gray-600">AI 기반 정밀 분석</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <TrendingUp className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">실시간 성과</h4>
                    <p className="text-sm text-gray-600">투명한 성과 추적</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <Users className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">전문 팀</h4>
                    <p className="text-sm text-gray-600">10년 경력 마케팅 전문가</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              지금 바로 무료 상담을 받아보세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              귀하의 비즈니스에 맞는 맞춤형 마케팅 전략을 제안해드립니다.
              30분 무료 상담으로 성공의 첫걸음을 시작하세요.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              무료 상담 신청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 