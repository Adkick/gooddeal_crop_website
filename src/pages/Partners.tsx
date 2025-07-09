import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Globe, 
  Users, 
  UserCheck, 
  ArrowRight,
  Building,
  Star,
  TrendingUp
} from 'lucide-react'

export default function Partners() {
  return (
    <div className="overflow-hidden">
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
              글로벌 <span className="text-primary">파트너 네트워크</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              아시아 주요 시장에서 검증된 파트너들과 함께 
              고객의 성공적인 해외 진출을 지원합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 파트너십 준비 중 안내 */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-accent/10 p-12 rounded-2xl">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <UserCheck className="w-12 h-12 text-primary" />
              </div>
              
              <h2 className="heading-2 text-gray-900 mb-6">
                파트너 정보 업데이트 중
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                현재 굿딜파트너는 아시아 5개국의 우수한 파트너사들과 
                전략적 제휴를 진행하고 있습니다. 상세한 파트너 정보는 
                곧 업데이트될 예정입니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">글로벌 네트워크</h3>
                  <p className="text-sm text-gray-600">아시아 5개국 현지 파트너</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Users className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">전문 인플루언서</h3>
                  <p className="text-sm text-gray-600">283명의 활성 크리에이터</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">검증된 성과</h3>
                  <p className="text-sm text-gray-600">평균 ROI 300% 달성</p>
                </div>
              </div>

              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">현재 협력 분야</h3>
                <div className="space-y-3">
                  {[
                    '베트남 틱톡 인플루언서 네트워크',
                    '일본 유튜브 패션 채널 파트너십',
                    '태국 푸드 인플루언서 협업',
                    '싱가포르 헬스케어 전문 채널',
                    '말레이시아 IT 크리에이터 네트워크'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <Star className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 파트너십 혜택 */}
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
              파트너십의 <span className="text-primary">핵심 가치</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              굿딜파트너와의 협력을 통해 얻을 수 있는 
              차별화된 혜택과 기회를 확인해보세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: '글로벌 시장 접근',
                description: '아시아 주요 시장으로의 빠른 진출과 현지화 지원',
                benefits: ['현지 문화 적응', '언어 장벽 해소', '규제 준수 지원']
              },
              {
                icon: Users,
                title: '검증된 인플루언서',
                description: '각 국가별 TOP 티어 인플루언서들과의 직접 연결',
                benefits: ['품질 보장', '성과 기반 매칭', '지속적 관리']
              },
              {
                icon: Building,
                title: '기술 공유',
                description: 'AI 기반 마케팅 플랫폼과 데이터 분석 기술 공유',
                benefits: ['AddKick 플랫폼', '실시간 분석', '예측 모델링']
              },
              {
                icon: TrendingUp,
                title: '성과 최적화',
                description: '데이터 기반 캠페인 최적화로 ROI 극대화',
                benefits: ['실시간 모니터링', 'A/B 테스트', '성과 분석']
              },
              {
                icon: UserCheck,
                title: '상호 성장',
                description: '파트너와 함께 성장하는 윈-윈 비즈니스 모델',
                benefits: ['수익 공유', '공동 마케팅', '브랜드 강화']
              },
              {
                icon: Star,
                title: '프리미엄 지원',
                description: '전담 매니저를 통한 24/7 프리미엄 고객 지원',
                benefits: ['전담 매니저', '우선 지원', '맞춤 솔루션']
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>

                <div className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 파트너 신청 */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-2 text-gray-900 mb-6">
              파트너가 되고 싶으신가요?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              굿딜파트너와 함께 아시아 시장에서 새로운 기회를 창출하세요. 
              우리는 항상 혁신적이고 전문적인 파트너를 찾고 있습니다.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">파트너 자격 요건</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">인플루언서 파트너</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 팔로워 10K+ (플랫폼별 상이)</li>
                    <li>• 활발한 콘텐츠 활동 (월 4회 이상)</li>
                    <li>• 높은 참여율 (3% 이상)</li>
                    <li>• 브랜드 친화적 콘텐츠</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">기업 파트너</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 마케팅 서비스 전문성</li>
                    <li>• 현지 시장 전문 지식</li>
                    <li>• 3년 이상 사업 경력</li>
                    <li>• 윤리적 비즈니스 운영</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4"
            >
              파트너십 문의하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
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
              함께 성장할 파트너를 기다립니다
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              굿딜파트너와 함께 아시아 시장에서 새로운 성공 스토리를 
              만들어나가세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                파트너십 상담
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
              >
                성과 사례 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 