import { motion } from 'framer-motion'
import { 
  Target, 
  Globe, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Award,
  Lightbulb,
  Shield
} from 'lucide-react'
import SEO from '../components/common/SEO'

const visionPoints = [
  {
    icon: Target,
    title: '마케팅 동료를 찾지 못해 폐업하는 소상공인들의 해결사',
    description: '전문적인 마케팅 지원으로 소상공인의 성공을 돕습니다.'
  },
  {
    icon: Globe,
    title: '상호명 검색만으로 복잡한 마케팅으로부터의 해방',
    description: 'AI 기반 자동화로 마케팅을 간편하게 만듭니다.'
  },
  {
    icon: TrendingUp,
    title: '예산은 쓰는데 성과는 모르는 깜깜이 마케팅 해결',
    description: '투명한 성과 추적으로 모든 과정을 가시화합니다.'
  },
  {
    icon: Users,
    title: '해외 진출 채널 확보',
    description: '글로벌 네트워크를 통한 성공적인 해외 진출을 지원합니다.'
  }
]

const differentiators = [
  {
    icon: Lightbulb,
    title: '비효율적 광고 시장의 개선',
    description: 'AI와 데이터 분석을 통해 광고 효율성을 극대화합니다.',
    features: ['AI 기반 타겟팅', '실시간 최적화', '성과 예측 모델']
  },
  {
    icon: Shield,
    title: '깜깜이 광고 시장 개혁',
    description: '투명한 프로세스로 모든 마케팅 활동을 가시화합니다.',
    features: ['실시간 대시보드', '상세 리포팅', '성과 추적']
  },
  {
    icon: Globe,
    title: '언어 및 문화적 장벽 해소',
    description: '현지 전문가와의 협업으로 문화적 차이를 극복합니다.',
    features: ['현지 인플루언서', '문화 적응형 콘텐츠', '현지 트렌드 분석']
  },
  {
    icon: Award,
    title: 'AI 및 자동화 기술 도입',
    description: '최신 기술로 마케팅 프로세스를 혁신합니다.',
    features: ['자동 광고 생성', '성과 분석 AI', '예측 모델링']
  }
]

export default function About() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "굿딜파트너",
      "description": "한국을 넘어 민간 KOTRA를 꿈꾸는 광고 업계의 해답. 전문적인 마케팅 솔루션으로 기업의 글로벌 진출을 지원합니다."
    }
  }

  return (
    <div className="overflow-hidden">
      <SEO 
        title="회사소개 - 민간 KOTRA를 꿈꾸는 광고 업계의 해답"
        description="굿딜파트너는 마케팅 전문 법인으로서 한국 기업들이 해외 시장에서 성공할 수 있도록 전문적인 솔루션과 파트너십을 제공합니다. AI 기술과 투명한 프로세스로 마케팅의 미래를 만듭니다."
        keywords="굿딜파트너 소개, 회사소개, 민간 KOTRA, 마케팅 전문 법인, 해외 진출, AI 마케팅, 광고 대행사, 글로벌 마케팅"
        ogTitle="굿딜파트너 - 한국을 넘어 민간 KOTRA를 꿈꾸는 광고 업계의 해답"
        ogDescription="투명하고 효과적인 마케팅 솔루션으로 모든 기업이 글로벌 시장에서 성공할 수 있도록 돕는 굿딜파트너를 소개합니다."
        canonicalUrl="https://gooddealpartner.com/about"
        jsonLd={aboutJsonLd}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 text-gray-900 mb-6">
              한국을 넘어 <span className="text-primary">민간 KOTRA</span>를<br />
              꿈꾸는 광고 업계의 해답
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              굿딜파트너는 마케팅 전문 법인으로서 한국 기업들이 해외 시장에서 성공할 수 있도록 
              전문적인 솔루션과 파트너십을 제공합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 회사 비전 Section */}
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
              우리의 <span className="text-primary">핵심 가치</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              고객의 성공이 곧 우리의 성공입니다. 투명하고 효과적인 마케팅 솔루션으로 
              모든 기업이 글로벌 시장에서 성공할 수 있도록 돕겠습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 차별화 요소 Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-gray-900 mb-6">
              굿딜파트너만의 <span className="text-primary">차별화 요소</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기존 마케팅 업계의 한계를 뛰어넘는 혁신적인 솔루션으로 
              고객에게 진정한 가치를 제공합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 마케팅 솔루션 특징 Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-gray-900 mb-6">
                투명한 마케팅 실행으로<br />
                <span className="text-primary">신뢰할 수 있는 파트너</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                기존의 불투명한 마케팅 시장과는 달리, 굿딜파트너는 모든 과정을 
                투명하게 공개하고 실시간으로 성과를 추적할 수 있는 시스템을 제공합니다.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: '투명한 마케팅 실행 내역',
                    description: '모든 광고 집행 과정과 비용을 실시간으로 확인할 수 있습니다.'
                  },
                  {
                    title: '진행 현황 파악 및 기대 효과 예측',
                    description: 'AI 분석을 통해 현재 진행 상황과 예상 성과를 미리 알 수 있습니다.'
                  },
                  {
                    title: '외주 마케팅 업체 신뢰 부족 해결',
                    description: '정기적인 리포팅과 투명한 소통으로 신뢰를 구축합니다.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">실시간 성과 대시보드</h4>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">도달률</span>
                        <span className="font-semibold text-gray-900">94.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">참여율</span>
                        <span className="font-semibold text-gray-900">12.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">전환율</span>
                        <span className="font-semibold text-accent">3.4%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4">진행 현황</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-700">콘텐츠 제작 완료</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-700">인플루언서 매칭 완료</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-primary rounded-full animate-spin"></div>
                        <span className="text-gray-700">캠페인 진행 중</span>
                      </div>
                    </div>
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
              굿딜파트너와 함께 성공하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              투명하고 효과적인 마케팅 솔루션으로 귀하의 비즈니스 성장을 
              지원하겠습니다.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              상담 문의하기
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 