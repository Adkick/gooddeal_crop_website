import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  Camera, 
  Code, 
  Database, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BarChart
} from 'lucide-react'

const services = [
  {
    id: 'addkick',
    title: 'AddKick',
    subtitle: '민간 KOTRA를 꿈꾸는 광고 업계의 해답',
    description: '상호명 입력만으로 30초 내에 최적의 광고가 자동 생성되는 혁신적인 AI 플랫폼입니다.',
    icon: Zap,
    features: [
      '상호명 입력만으로 최적의 광고 생성 (30초 내)',
      '병렬 API 호출을 통한 기본정보 수집',
      '스마트 크롤링으로 리뷰 및 상권 분석',
      'AI 분석을 통한 매칭 및 검색 제공',
      '광고 진행 상황 및 효과 실시간 확인'
    ],
    benefits: [
      '시간 절약: 기존 3-4주 → 30초',
      '비용 절감: 외주비 90% 절약',
      '정확도 향상: AI 분석 기반 타겟팅',
      '투명성: 실시간 성과 추적'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'renpick',
    title: 'Renpick',
    subtitle: '렌즈 렌탈 서비스',
    description: '전문 렌즈 대여 플랫폼으로 고품질 렌즈의 접근성을 개선하여 크리에이터들의 작업을 지원합니다.',
    icon: Camera,
    features: [
      '고품질 전문 렌즈 대여',
      '사진작가 및 영상 제작자 타겟',
      '크리에이터 지원 프로그램',
      '렌즈 품질 보장 시스템',
      '편리한 배송 및 반납 서비스'
    ],
    benefits: [
      '비용 효율성: 구매 대비 80% 절약',
      '다양성: 100+ 종류 렌즈',
      '편의성: 당일 배송 서비스',
      '안전성: 보험 보장 시스템'
    ],
    color: 'from-purple-500 to-purple-600'
  }
]

const techStack = [
  {
    category: '서버',
    icon: Database,
    technologies: ['Gunicorn', 'Google BERT', 'LightGBM', 'MySQL', 'FastAPI', 'Redis']
  },
  {
    category: '클라이언트',
    icon: Code,
    technologies: ['Amazon EC2', 'TypeScript', 'React']
  },
  {
    category: 'AI/ML',
    icon: Brain,
    technologies: ['BERT 기반 자연어 처리', 'LightGBM 예측 모델']
  }
]

export default function Services() {
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
              혁신적인 <span className="text-primary">AI 솔루션</span>으로<br />
              마케팅의 미래를 만듭니다
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              굿딜파트너의 첨단 기술과 전문성이 결합된 서비스로 
              비즈니스의 성장을 가속화하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AddKick Service */}
      <section id="addkick" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${services[0].color} rounded-xl flex items-center justify-center`}>
                  {React.createElement(services[0].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{services[0].title}</h2>
                  <p className="text-gray-600">{services[0].subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[0].description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">핵심 기능</h3>
                {services[0].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-primary"
              >
                AddKick 체험하기
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
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {services[0].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                    >
                      <div className="font-semibold text-gray-900 mb-2">
                        {benefit.split(':')[0]}
                      </div>
                      <div className="text-sm text-gray-600">
                        {benefit.split(':')[1]}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 실시간 데모 UI */}
                <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">AI 광고 생성 프로세스</h4>
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-sm text-gray-700">상호명 분석 완료</span>
                      <span className="text-xs text-gray-500">5초</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-sm text-gray-700">타겟 분석 완료</span>
                      <span className="text-xs text-gray-500">15초</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">광고 생성 중...</span>
                      <span className="text-xs text-gray-500">30초</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renpick Service */}
      <section id="renpick" className="section bg-gradient-to-br from-purple-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <div className="grid grid-cols-1 gap-6">
                  {services[1].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <Camera className="w-6 h-6 text-purple-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {benefit.split(':')[0]}
                          </div>
                          <div className="text-sm text-gray-600">
                            {benefit.split(':')[1]}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${services[1].color} rounded-xl flex items-center justify-center`}>
                  {React.createElement(services[1].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{services[1].title}</h2>
                  <p className="text-gray-600">{services[1].subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[1].description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">주요 특징</h3>
                {services[1].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-secondary"
              >
                Renpick 이용하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기술 스택 Section */}
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
              최첨단 <span className="text-primary">기술 스택</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              검증된 기술과 혁신적인 AI를 결합하여 안정적이고 
              효과적인 서비스를 제공합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {React.createElement(tech.icon, { className: "w-6 h-6 text-primary" })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tech.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {tech.technologies.map((technology, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{technology}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 성과 지표 Section */}
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
              서비스 성과 지표
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: '누적 사용자', value: '10,000+', color: 'text-blue-600' },
              { icon: BarChart, label: '평균 성과 향상', value: '340%', color: 'text-accent' },
              { icon: Clock, label: '평균 처리 시간', value: '30초', color: 'text-purple-600' },
              { icon: CheckCircle, label: '고객 만족도', value: '98%', color: 'text-green-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                  {React.createElement(stat.icon, { className: `w-8 h-8 ${stat.color}` })}
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
              지금 바로 혁신적인 솔루션을 경험하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              AddKick과 Renpick으로 비즈니스의 새로운 가능성을 발견하세요.
              무료 체험으로 시작할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                무료 체험 신청
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