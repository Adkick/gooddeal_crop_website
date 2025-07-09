import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  TrendingUp, 
  Target,
  Briefcase,
  GraduationCap,
  Star,
  CheckCircle
} from 'lucide-react'

const teamLeader = [
  {
    name: '최진',
    position: 'CEO',
    description: '마케팅 경력 10년 (LG가전 렌탈 파트)',
    experience: [
      '엠서치마케팅 협업',
      '미래아이엔씨 협업', 
      '호라이젠 코리아 협업',
      '"올루션" 마케팅 실행사 대표 경력'
    ],
    keyCapabilities: [
      '자금 조달 능력 - 창업 초기 3억원 자본금 확보',
      '정부 인증 - 벤처기업 인증으로 정책 지원 수혜',
      '업계 네트워크 - 10년 마케팅 경력 기반 파트너십',
      '실행력 - 기존 마케팅 회사 운영 경험'
    ],
    image: '/cj.png',
    achievements: ['마케팅 분야 10년 경력', '3억원 자본금 조달', '벤처기업 인증 획득']
  }
]

const team = [
  {
    name: '오은주',
    position: 'CMO/CFO',
    education: '마산대학교 행정학과',
    experience: '• 마케팅 경력 10년 (LG가전 렌탈 파트)',
    expertise: ['마케팅 전략', '재무 관리', '사업 기획'],
    projects: ['해외 마케팅 전략 수립', '파트너십 관리', '성과 분석 시스템'],
    image: '/oej.png'
  },
  {
    name: '안태윤',
    position: 'CTO',
    education: '전북대학교 컴퓨터공학과',
    experience: '• 42Seoul 개발자 과정 수료\n• 개발경력 5년',
    expertise: ['시스템 아키텍처', '백엔드 개발', '클라우드 인프라'],
    projects: [
      '연세대학교 금융공학 연구실 외주',
      '국민연금 산학협력 프로젝트 제작',
      '코스콤 산학협력 프로젝트 제작',
      '전국 단위 창업경진대회/해커톤 다수 수상'
    ],
    image: '/aty.png'
  },
  {
    name: '전우식',
    position: '백엔드 개발자',
    education: '전남대학교 통계/소프트웨어학과',
    experience: '• 삼성 SW 아카데미 수료(SSAFY)\n• 카카오테크 캠퍼스 웹서비스 개발과정',
    expertise: ['AI/ML 개발', '데이터 분석', 'API 개발'],
    projects: [
      'AI 클라우드 인재양성 심화과정 수료',
      '전국단위 해커톤 수상 실적 다수',
      '정보처리기사/SQLD/ADSP/NCA 보유'
    ],
    image: '/jws.png'
  }
]

const companyCapabilities = [
  {
    icon: TrendingUp,
    title: '자금 조달 능력',
    description: '창업 초기 3억원 자본금 확보',
    color: 'text-green-600'
  },
  {
    icon: Award,
    title: '정부 인증',
    description: '벤처기업 인증으로 정책 지원 수혜',
    color: 'text-blue-600'
  },
  {
    icon: Users,
    title: '업계 네트워크',
    description: '10년 마케팅 경력 기반 파트너십',
    color: 'text-purple-600'
  },
  {
    icon: Target,
    title: '실행력',
    description: '기존 마케팅 회사 운영 경험',
    color: 'text-orange-600'
  }
]

export default function Team() {
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
              <span className="text-primary">전문가 팀</span>이 만드는<br />
              성공의 차이
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              10년 이상의 마케팅 경험과 최신 기술 전문성을 갖춘 
              굿딜파트너 팀을 소개합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 대표 인사말 */}
      <section className="section bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="heading-2 text-gray-900 mb-6">
                대표 인사말
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  안녕하세요, 주식회사 굿딜파트너스 대표 <span className="font-bold text-primary">최진</span>입니다.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  저는 20대 초반, LG 가전렌탈 온라인 사업에 뛰어든 이후 <span className="font-semibold">"돈이 흐르는 길을 설계하는 마케터"</span>로 성장해 왔습니다. 
                  창업 초기의 거친 시장과 치열한 경쟁 속에서도 연 매출 수 억 원대를 꾸준히 달성하며 법인을 설립했고, 
                  지금도 데이터 기반 퍼포먼스 마케팅으로 고객과 파트너사의 실질적 수익을 만들어 내고 있습니다.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  제 인생은 결코 순탄하지 않았습니다. 혈액암 4기를 이겨냈고, 지금도 희귀 난치 질환이라는 이름과 함께 하루를 살아갑니다. 
                  그러나 이 모든 경험이 저에게 한 가지 확신을 주었습니다.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg mb-6">
                  <p className="text-lg font-semibold text-primary italic">
                    "환경은 핑계가 될 수 없다. 포기는 선택지가 아니다."
                  </p>
                </blockquote>

                <p className="text-gray-700 leading-relaxed mb-6">
                  이 확신은 주식회사 굿딜파트너스의 DNA로 자리 잡았습니다. 
                  우리는 불가능해 보이는 상황에서도 귀중한 기회를 찾아내고, 반드시 수익으로 연결합니다.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">비전</h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    "데이터와 신뢰로 연결된 파트너십 생태계를 만들어 모두가 함께 성장하는 세상"
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    굿딜파트너스는 전략적 마케팅 플랫폼 <span className="font-bold">'AdKick'</span>과 렌탈 전문 종합몰 <span className="font-bold">'Renpick'</span>, 
                    소프트웨어 개발 및 공급업을 중심으로, 국내·외 파트너들과 함께 글로벌 성장의 발판을 넓혀가고 있습니다.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">
                  어떤 환경에서도 포기하지 않는 저의 도전 정신과 검증된 돈 버는 능력으로, 
                  굿딜파트너스가 파트너의 최고의 수익 파트너가 될 것을 약속드립니다.
                </p>

                <div className="text-right">
                  <p className="text-gray-600 mb-2">감사합니다</p>
                  <p className="font-bold text-primary text-lg">굿딜파트너스 대표 | 최진</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO 소개 */}
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
              팀원 소개
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              비전과 실행력을 겸비한 리더가 굿딜파트너를 이끌어갑니다.
            </p>
          </motion.div>

          {teamLeader.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{leader.name}</h3>
                      <p className="text-xl text-primary font-semibold">{leader.position}</p>
                      <p className="text-gray-600">{leader.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">핵심 역량</h4>
                      <div className="space-y-3">
                        {leader.keyCapabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">주요 경력</h4>
                      <div className="space-y-3">
                        {leader.experience.map((exp, expIndex) => (
                          <div key={expIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">주요 성과</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {leader.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="bg-gray-50 p-4 rounded-lg text-center">
                            <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                            <div className="text-sm font-medium text-gray-900">{achievement}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-60 h-80 rounded-xl object-contain mx-auto shadow-lg"
                      />
                      <div className="mt-6 text-center">
                        <div className="text-2xl font-bold text-gray-900">{leader.name}</div>
                        <div className="text-primary font-semibold">{leader.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 대표 핵심 역량 */}
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
              대표 핵심 역량
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              성공적인 사업 운영을 위한 필수 역량들을 모두 갖추고 있습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                  <capability.icon className={`w-8 h-8 ${capability.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 팀 구성 */}
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
              전문가 팀 구성
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 분야의 전문성을 갖춘 팀원들이 최고의 서비스를 제공합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 w-full h-[680px] flex flex-col"
              >
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium">{member.position}</p>
                </div>

                <div className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">학력</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">{member.education}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">경력</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6 whitespace-pre-line">{member.experience}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">전문 분야</h4>
                    <div className="space-y-1 min-h-[72px]">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">주요 프로젝트</h4>
                    <div className="space-y-1 min-h-[200px]">
                      {member.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 팀 성과 */}
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
              팀 통합 성과
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: '통합 경력년수', value: '30+년', icon: Users },
              { label: '완료 프로젝트', value: '100+개', icon: Target },
              { label: '고객 만족도', value: '98%', icon: Star },
              { label: '기술 특허', value: '5개', icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
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
              전문가 팀과 함께 성공하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              10년 이상의 경험과 전문성을 갖춘 굿딜파트너 팀이 
              여러분의 성공을 위해 최선을 다하겠습니다.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              전문가 상담 받기
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 