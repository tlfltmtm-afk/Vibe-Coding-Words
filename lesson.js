const aiUrls = {
    'gemini': 'https://gemini.google.com',
    'chatgpt': 'https://chatgpt.com',
    'claude': 'https://claude.ai',
    'grok': 'https://x.com/i/grok'
};

// 바이브 코딩 연수 과정 완성을 위한 업데이트된 강의 계획 데이터 (총 17차시)
// 기존 15차시의 핵심 흐름을 유지하면서 초보자들의 실질적인 페인포인트를 해결할 2개의 차시(디버깅, DB연동)를 추가했습니다.
// 또한 질문(QA) 목록을 실제 수강생들이 자주 묻는 더 직관적이고 구체적인 질문들로 일부 다듬었습니다.

const lessonData = [
    {
        id: 1,
        title: '1차시: 바이브 코딩이란? (패러다임의 전환)',
        summary: '코더에서 디렉터로, 자연어로 코딩하는 새로운 패러다임을 알아봅니다.',
        topic: 'Paradigm Shift',
        slides: [
            { title: '코더(Coder)에서 디렉터(Director)로 🎬', diagram: '👨‍💻 과거: [인간] ➡️ 영어 기반의 복잡한 문법 학습 ➡️ [컴퓨터]\n👨‍🎨 현재: [인간: 아이디어/자연어] ➡️ 🤖 **AI가 코딩 통역사 역할** ➡️ [컴퓨터]', desc: '- **자연어가 프로그래밍 언어가 되다:** 과거에는 컴퓨터와 대화하기 위해 C언어, 파이썬 등 컴퓨터의 언어를 우리가 배워야 했습니다. 하지만 이제는 우리가 평소에 쓰는 \'한국어(자연어)\'로 지시하면, AI가 이를 컴퓨터 언어로 실시간 번역해 줍니다.\n- **디렉터의 마인드셋:** 영화감독이 카메라 조작법이나 조명 설치법을 몰라도 훌륭한 영화를 만들 수 있듯, 우리도 코드를 한 줄 한 줄 타이핑하는 \'작업자\'가 아니라, 어떤 기능을 만들지 기획하고 AI에게 방향을 지시하는 \'총괄 디렉터\'가 되어야 합니다.' },
            { title: '문법을 몰라도 괜찮은 이유 🎼', diagram: '🧠 명확한 기획 (무엇을 만들 것인가) ➕ 🗣️ 정교한 프롬프트 (어떻게 지시할 것인가) 🟰 💻 완벽히 구동되는 코드', desc: '- **에러의 공포에서 해방:** 예전에는 세미콜론(`;`) 하나, 오타 하나만 있어도 프로그램이 멈췄고, 초보자들은 여기서 포기했습니다.\n- **AI의 자가 수정:** 바이브 코딩 시대의 AI는 단순한 자동완성이 아닙니다. 에러가 나면 에러 메시지를 그대로 복사해서 "이거 에러 나는데 고쳐줘"라고 하면 스스로 원인을 파악하고 코드를 수정합니다. 우리는 문법 암기 대신 \'논리적인 생각\'에만 집중하면 됩니다.' },
            { title: '누구나 창작자가 되는 교실 🏫✨', diagram: '💡 교사: "반복 업무가 귀찮네" ➡️ AI 맞춤형 툴 즉시 제작 ➡️ 행정/수업 준비 시간 단축\n🌱 학생: "이런 게임이 있으면 좋겠다" ➡️ 상상을 현실로 구현 ➡️ 압도적인 성취감 획득', desc: '- **소프트웨어 교육의 혁명:** 코딩 교육의 진입 장벽이 완전히 무너졌습니다. 코딩 문법을 가르치느라 한 학기를 보내는 대신, 학생들은 첫 시간부터 자신의 아이디어를 소프트웨어로 만들어내는 경험을 하게 됩니다.\n- **교사를 위한 슈퍼파워:** 학급 규칙 뽑기, 학생 상담 기록기, 맞춤형 퀴즈 생성기 등 \'내 입맛에 딱 맞는\' 도구를 시중에서 찾을 필요 없이 그 자리에서 뚝딱 만들어 사용할 수 있습니다.' }
        ],
        qaList: [
            '코딩 지식이 0인데 정말 제가 만들 수 있나요?',
            'AI가 만든 코드에 에러가 나면 결국 개발자가 필요한 것 아닌가요?',
            '기존 블록 코딩(엔트리, 스크래치) 교육과 바이브 코딩의 차이점은 무엇인가요?',
            '노코딩 툴(Non-coding tool)과 바이브 코딩은 어떤 점이 다른가요?'
        ]
    },
    {
        id: 2,
        title: '2차시: 생성형 AI의 확장과 우리의 도전 목표',
        summary: '단순 텍스트 생성을 넘어 완벽히 동작하는 소프트웨어를 만드는 AI의 발전을 체험합니다.',
        topic: 'Generative AI',
        slides: [
            { title: '텍스트를 넘어 코드의 세계로 🚀', diagram: '📝 1단계: 텍스트 (챗GPT - 글짓기, 요약, 번역)\n🎨 2단계: 미디어 (미드저니, 소라 - 이미지 및 영상 생성)\n💻 **3단계: 로직과 소프트웨어 (바이브 코딩 - 동작하는 앱/웹 생성)**', desc: '- AI 기술은 단순히 그럴듯한 텍스트나 이미지 \'보여주는\' 단계를 넘어섰습니다. 이제는 버튼을 누르면 데이터가 계산되고 화면이 넘어가는 등, 사용자와 상호작용하는 \'소프트웨어의 뼈대와 논리(Logic)\'를 통째로 생성해 냅니다.' },
            { title: '상상이 현실이 되는 마법 🪄', diagram: '☁️ 상상: "우리 반 아이들 칭찬 도장 찍어주는 앱이 있으면 좋겠어!"\n⬇️ (AI와 채팅하며 요구사항 수정 및 발전)\n📱 현실: 실제 내 스마트폰 브라우저에 깔려 있는 나만의 \'칭찬 앱\'', desc: '- 기존에는 앱 하나를 만들려면 외주를 맡겨 수백만 원을 쓰거나, 몇 달간 개발 학원을 다녀야 했습니다.\n- 이제는 커피 한 잔 마시는 시간 동안 AI와 대화하며, 내가 교실에서 당장 필요한 맞춤형 앱의 프로토타입(시제품)을 만들어내고 실사용까지 할 수 있습니다.' },
            { title: '이번 연수에서 우리가 얻어갈 3가지 전리품 🏆', diagram: '1️⃣ 🌐 **웹페이지:** 나를 알리는 포트폴리오, 혹은 학급 안내 사이트\n2️⃣ 📱 **모바일 웹앱:** 스마트폰에서도 예쁘게 작동하는 교육용/업무용 툴\n3️⃣ 📚 **실전 경험:** AI를 기획하고 조율하는 완벽한 디렉터 경험', desc: '- 연수가 끝난 후 남는 것은 막연한 \'이론\'이 아닙니다. 강사의 시연을 구경만 하는 것이 아니라, 연수 기간 내내 여러분의 손으로 직접 지시하고 수정한 결과물들이 인터넷 주소(URL) 형태로 완벽하게 남게 됩니다.' }
        ],
        qaList: [
            '바이브 코딩으로 복잡한 3D 게임이나 화려한 앱도 만들 수 있나요?',
            'AI가 코딩을 전부 해주면 향후 개발자라는 직업이나 코딩 교육은 사라지게 되나요?'
        ]
    },
    {
        id: 3,
        title: '3차시: 웹 생태계 첫걸음 (프론트엔드와 백엔드)',
        summary: '프론트엔드와 백엔드의 차이를 이해하고 웹 서비스의 뼈대를 세우는 법을 알아봅니다.',
        topic: 'Web Basics',
        slides: [
            { title: '식당으로 이해하는 웹의 작동 방식 🍽️', diagram: '👤 **손님 (사용자/브라우저):** "메뉴판 보고 떡볶이 주문할게요!" (클릭/요청)\n💁 **홀서빙 (네트워크/API):** 주문 내역을 주방으로 안전하게 전달 (통신)\n👨‍🍳 **주방장 (서버/DB):** 냉장고에서 재료 꺼내 요리 완성 후 서빙 (데이터 처리)', desc: '- 우리가 인터넷을 쓸 때 일어나는 일은 식당의 주문 과정과 똑같습니다. 브라우저(크롬)에서 버튼을 누르는 것은 손님이 주문하는 것이고, 이 주문이 보이지 않는 인터넷 망(서빙)을 타고 서버(주방)로 가서 데이터를 가져오는 끊임없는 티키타카의 연속입니다.' },
            { title: '눈에 보이는 화려한 무대 🎭 (Front-end)', diagram: '🏗️ **HTML (뼈대):** 텍스트, 이미지, 버튼 배치 (건물의 콘크리트)\n🎨 **CSS (꾸미기):** 폰트, 색상, 애니메이션 (건물의 페인트)\n⚙️ **JavaScript (근육):** 클릭 시 팝업 등 동작 (건물의 전기/수도)', desc: '- **프론트엔드(Front-end)**는 사용자의 눈에 보이고 직접 만지는 모든 화면 영역입니다. AI에게 화면 디자인을 지시할 때 이 세 가지 요소의 역할을 알면 훨씬 디테일하게 명령할 수 있습니다.' },
            { title: '무대 뒤에서 묵묵히 일하는 스태프 🥷 (Back-end)', diagram: '💾 **데이터베이스 (DB):** 회원 정보와 게시글 보관 창고\n🧠 **AI/서버 연동:** 외부 AI에 데이터를 물어보고 안전하게 응답만 전달하기', desc: '- **백엔드(Back-end)**는 눈에 보이지 않는 \'뒷단\'입니다. 로그인 정보를 기억하거나 데이터를 안전하게 저장하려면 백엔드가 필수적입니다.' }
        ],
        qaList: [
            'HTML, CSS, JS 중 AI가 가장 헷갈려하거나 오류를 자주 내는 부분은 무엇인가요?',
            '초보자는 백엔드 없이 프론트엔드(화면)만으로도 의미 있는 결과물을 만들 수 있나요?'
        ]
    },
    {
        id: 4,
        title: '4차시: 구글 AI 스튜디오(Google AI Studio) 입문',
        summary: '복잡한 설치 없이 브라우저에서 바로 개발을 시작할 수 있는 최적의 환경을 세팅합니다.',
        topic: 'Google AI Studio',
        slides: [
            { title: '개발자를 위한 강력한 AI 샌드박스 🛠️', diagram: '[복잡한 개발 환경 설치] ❌ ➡️ [크롬 브라우저 접속만으로 끝] ⭕', desc: '- 코딩을 처음 시작할 때 가장 큰 벽은 \'개발 프로그램 설치\'입니다. 구글 AI 스튜디오는 웹 사이트 접속만으로 구글의 최신 모델(Gemini)을 개발자 수준으로 세밀하게 조작할 수 있는 완벽한 샌드박스입니다.' },
            { title: 'AI를 똑똑하게 부려먹는 마법의 주문 📜', diagram: '❌ 하수: "재밌는 퀴즈 게임 하나 짜줘."\n⭕ 고수: **[페르소나]** + **[구체적 규칙]** + **[출력 형태]**', desc: '- AI는 질문의 수준에 맞춰 대답합니다. 역할을 부여하고(너는 개발자야), 예외 상황이나 규칙을 구체적으로 통제할수록 완벽한 결과물을 얻을 수 있습니다.' },
            { title: '클릭 세 번으로 내 웹사이트 탄생 🐣', diagram: '1️⃣ 시스템 프롬프트(지시문) 입력 ➡️ 2️⃣ \'Get Code(코드 보기)\' 클릭 ➡️ 3️⃣ 생성된 코드를 복사해서 실행!', desc: '- 구글 AI 스튜디오 안에서는 내가 짠 프롬프트가 실제 어떤 코드로 변환되는지 실시간으로 확인 가능합니다.' }
        ],
        qaList: [
            'System Instructions(시스템 지시어)와 일반 User Prompt의 역할 차이는 정확히 무엇인가요?',
            '생성된 코드가 너무 길어서 중간에 끊겼을 때는 어떻게 이어서 받나요?'
        ]
    },
    {
        id: 5,
        title: '5차시: 내게 맞는 코드 에디터 선택하기',
        summary: '생산성을 극대화해 줄 나만의 코드 작업실을 구축하고 초기 환경을 설정합니다.',
        topic: 'Code Editors',
        slides: [
            { title: '본격적인 개발을 위한 나만의 작업실 🏗️', diagram: '📝 메모장 (오타 안 잡아줌 🚫) ➡️ 💻 **코드 에디터 (색상 구분, 자동 완성, 에러 체크 ✅)**', desc: '- 전문 목수에게 좋은 톱이 필요하듯, 우리에게는 코드를 정렬해주고 실수를 방지해 주는 \'전용 편집기(Code Editor)\'가 필수입니다.' },
            { title: '대표적인 에디터 3대장, 내 취향 고르기 ⚔️', diagram: '📘 **VS Code:** 전 세계 1위. 정석.\n🚀 **Antigravity:** 요즘 가장 뜨거운 AI 네이티브 에디터.\n🖱️ **Cursor:** AI 코딩 자동화의 양대산맥 끝판왕.', desc: '- 기존에 익숙한 방식이 좋다면 VS Code를, AI가 내 코드를 전반적으로 파악하고 타이핑해 주는 미래지향적 경험을 원한다면 Antigravity나 Cursor를 추천합니다.' },
            { title: '작업실 인테리어 시작하기 (초기 세팅) 🪚', diagram: '설치 ➡️ 바탕화면에 \'바이브코딩_작업실\' 빈 폴더 생성 ➡️ 에디터에서 해당 폴더 열기', desc: '- 에디터에게 \'내가 작업할 공간(폴더)\'을 지정해 주어야 합니다. `index.html` 파일을 생성하는 것부터가 시작입니다.' }
        ],
        qaList: [
            'Vscode나  Antigravity같은 AI 에디터는 유료 결제 없이도 연수를 따라가기에 충분한가요?',
            '바탕화면에 폴더를 여러 개 만들면 에디터가 프로젝트를 헷갈려하지 않나요?'
        ]
    },
    {
        id: 6,
        title: '6차시: 에디터에 AI 에이전트 심기',
        summary: '창을 왔다갔다 할 필요 없이 에디터 안에서 대화하며 실시간으로 코드를 수정합니다.',
        topic: 'AI Agents in IDE',
        slides: [
            { title: '내 작업실에 상주하는 24시간 코딩 비서 🤵‍♂️', diagram: '웹 브라우저 복붙 (번거로움 폭발) ➡️ **에디터 속 AI 에이전트 도입 (파일 문맥 자동 파악)**', desc: '- 웹 브라우저와 에디터 창을 오갈 필요가 없습니다. 내 코딩 작업실 안에 AI를 직접 고용하여 파일 전체 맥락을 파악하게 합니다.' },
            { title: '대화하며 코딩하는 법 (인라인 챗 & 사이드바) 💬', diagram: '코드 드래그 ➡️ 단축키(Ctrl+L 등) 입력 ➡️ "이거 배경색 바꿔줘" ➡️ \'적용(Apply)\' 클릭!', desc: '- 코드를 직접 치지 마세요. 지시만 내리면 AI가 기존 코드와 새 코드를 비교(Diff)해서 보여줍니다. 마음에 들면 수락(Accept)만 누르세요.' },
            { title: 'Composer / 에이전트 모드 활용 🤖', diagram: '여러 개의 파일을 동시에 생성하고 연결하는 강력한 AI 자율 모드 경험하기', desc: '- 파일 하나를 넘어 폴더 구조 자체를 AI가 기획하고 여러 파일을 동시에 수정하도록 지시하는 심화 기능을 맛봅니다.' }
        ],
        qaList: [
            'AI 비서가 기존 정상 코드까지 엉뚱하게 망쳐버리면 어떻게 뒤로 되돌리나요?',
            'Ctrl+L(채팅)과 Ctrl+K(인라인 수정)의 용도 차이는 무엇인가요?',
            '.cursorrules 같은 프롬프트 규칙 파일은 어떻게 작성해야 AI가 말을 잘 듣나요?'
        ]
    },
    {
        id: 7,
        title: '7차시: 깃허브(GitHub)란 무엇이고 왜 필요한가?',
        summary: '전 세계 개발자들의 저장소 깃허브를 활용해 코드를 안전하게 백업하고 버전을 관리합니다.',
        topic: 'Git & GitHub',
        slides: [
            { title: '개발자들의 구글 드라이브이자 SNS 🐙', diagram: '💻 내 컴퓨터 (고장 시 증발) ➡️ ☁️ **깃허브 (인터넷 금고에 안전 백업)**', desc: '- 내가 작성한 코드 파일들을 클라우드에 업로드하여 언제 어디서나 불러오게 해주는 필수 플랫폼입니다.' },
            { title: '코드의 타임머신 탑승하기 (버전 관리) ⏳', diagram: '버전1(정상) ➡️ 버전2(수정) ➡️ "망했다, 버전1로 돌려줘!" ➡️ 원상복구', desc: '- 깃허브는 특정 시점의 상태를 \'사진(Snapshot)\'처럼 찍어두기 때문에, 치명적인 실수를 해도 언제든 과거로 돌아갈 수 있는 든든한 보험입니다.' },
            { title: '향후 무료 웹 배포를 위한 첫 관문 🚪', diagram: '에디터 연동 ➡️ \'Commit(저장)\' & \'Push(업로드)\' ➡️ 깃허브 업로드 확인', desc: '- 깃허브에 코드를 올려두어야만 추후 Vercel 같은 무료 배포 플랫폼과 연결해 전 세계에 사이트를 띄울 수 있습니다.' }
        ],
        qaList: [
            'Commit(커밋)과 Push(푸시)는 왜 굳이 두 단계로 나누어져 있나요?',
            '코드를 비공개(Private)로 올리면 나중에 배포할 때 에러가 나나요?',
            '코드를 덮어쓰다 망쳤을 때, Git을 이용해 과거의 특정 시점으로 되돌리는 구체적인 방법은 무엇인가요?'
        ]
    },
    {
        id: 8,
        title: '8차시: [실전 A-1] 순수 프론트엔드 정적 웹 만들기',
        summary: '유지비 0원! 서버가 필요 없는 가볍고 빠른 정적 웹사이트를 구축해 봅니다.',
        topic: 'Static Web Apps',
        slides: [
            { title: '서버 비용 0원! 깃털처럼 가볍고 빠른 웹 🪶', diagram: '동적 웹 (서버 연산/비용 발생) 🆚 **정적 웹 (HTML/JS만 존재, 유지비 무료)**', desc: '- 외부에서 데이터를 가져오지 않는다면 뼈대와 단순 기능만 들어있는 \'정적 웹사이트\'가 유리합니다.' },
            { title: 'AI로 기능 구현하기 (교육용 게임/UI 사례) 🗺️', diagram: '🕵️‍♂️ **방탈출 웹:** "비밀번호 `1024` 입력 시 다음 화면 이동 로직 구현"', desc: '- 데이터베이스 없이 JavaScript 조건문(if-else)만으로도 훌륭한 교육용 게임이나 인터랙티브 웹을 만들 수 있습니다.' },
            { title: '즉각적인 피드백과 미세 조정의 쾌감 🔍', diagram: '코드 수정 ➡️ 저장(Ctrl+S) ➡️ 브라우저 새로고침(F5) ➡️ 즉시 확인', desc: '- 프론트엔드 개발의 즐거움은 내 수정 사항이 눈앞에 시각적으로 바로 나타난다는 점입니다.' }
        ],
        qaList: [
            '정적 웹사이트에서도 사용자들의 클릭 수나 방문자 통계를 수집할 수 있나요?',
            '스마트폰과 PC에서 모두 화면이 깨지지 않고 예쁘게 나오게(반응형) 하려면 AI에게 뭐라고 지시해야 하나요?'
        ]
    },
    {
        id: 9,
        title: '9차시: [실전 A-2] 프롬프트 생성기 인터페이스 웹 만들기',
        summary: '사용자 선택에 따라 완벽한 프롬프트를 자동 조립해 주는 똑똑한 웹 툴을 만듭니다.',
        topic: 'Prompt Generators',
        slides: [
            { title: '질문을 대신 조립해주는 영리한 자판기 🧃', diagram: '[학년 선택] ➕ [과목 선택] 🟰 자동 완성된 정교한 프롬프트 문장', desc: '- 화면에 보기 편한 드롭다운을 만들면, 자바스크립트가 완벽한 프롬프트 문장으로 조립해 주는 똑똑한 인터페이스를 만듭니다.' },
            { title: '내 돈 한 푼 안 쓰는 \'꼼수\' 연동 로직 🤫', diagram: '문장 완성 ➡️ 클립보드 자동 복사 📋 ➡️ **챗GPT 공식 홈페이지 강제 새창 열기 🚀**', desc: '- 개발자인 나는 유지비용을 1원도 내지 않고 사용자 기기에서 복사+이동을 유도하는 실용적 설계입니다.' },
            { title: '교육 현장 적용 사례 🎒', diagram: '진로 탐험대, 시간 탐험대 페르소나 생성기 등', desc: '- 프롬프트 엔지니어링 지식이 없는 학생들도 버튼 몇 번으로 최고 품질의 AI 결과를 얻게 됩니다.' }
        ],
        qaList: [
            '클립보드 자동 복사(`navigator.clipboard`) 기능이 아이패드나 스마트폰에서 안 먹히면 어떻게 수정하나요?',
            '생성된 프롬프트를 챗GPT가 아니라 카카오톡으로 바로 공유되게 버튼을 달 수도 있나요?'
        ]
    },
    {
        id: 10,
        title: '10차시: API와 토큰(Token)의 이해',
        summary: 'AI 서비스를 연동하기 위한 API의 개념과 요금 체계(토큰)를 쉽게 파악합니다.',
        topic: 'APIs & Tokens',
        slides: [
            { title: '내 웹과 AI를 연결하는 보이지 않는 파이프라인 🚰', diagram: '🙋‍♂️ **내 웹사이트** ↔️ 💁‍♀️ **API (서빙 점원)** ↔️ 🤖 **AI 서버 (주방)**', desc: '- 외부의 똑똑한 AI 컴퓨터와 내 웹이 데이터를 주고받을 수 있도록 규격화된 통신 창구가 바로 API입니다.' },
            { title: 'AI 세상의 화폐 단위, 토큰(Token) 🪙', diagram: '1 Token 🟰 영어 약 0.75단어 / 한글 약 0.5글자 (한글이 과금이 더 비쌈)', desc: '- AI 기업들은 데이터를 처리한 양만큼 요금을 받으며, 그 기준 단위가 \'토큰\'입니다.' },
            { title: '가성비 vs 성능, 목적에 맞는 무기 선택 ⚖️', diagram: '🥇 **성능 끝판왕:** GPT-4o, Claude 3.5 Sonnet\n🏃 **가성비 끝판왕:** GPT-4o-mini, Gemini 1.5 Flash', desc: '- 내가 만들 웹 서비스의 난이도에 맞춰 가성비 모델을 영리하게 선택해야 합니다.' }
        ],
        qaList: [
            'API 키를 발급받아 테스트만 해도 요금이 청구되나요?',
            '동일한 질문을 했는데 왜 한글이 영어보다 토큰(요금)을 더 많이 소모하나요?',
            'AI 에디터(Cursor)에서 주는 크레딧과 OpenAI API 요금은 별개로 청구되는 건가요?'
        ]
    },
    {
        id: 11,
        title: '11차시: 무료 혜택과 API 보안 철칙',
        summary: '구글의 무료 AI 한도를 활용하고, 내 지갑을 지키는 필수 보안 철칙을 확립합니다.',
        topic: 'API Security',
        slides: [
            { title: '지갑을 열지 않고 테스트하기 (구글 신규 혜택) 🎁', diagram: '🎉 **Gemini 1.5 Flash 모델:** 1분 15번, 하루 1,500번 요청 전면 무료!', desc: '- 구글의 제미나이 생태계는 개인 학습자나 테스트 목적의 개발자들에게 매우 넉넉한 영구 무료 한도를 제공합니다.' },
            { title: '내 신용카드를 버리지 마세요 (매우 중요!) 💳🚨', diagram: '❌ 코드에 대놓고 적기 ➡️ 해킹 표적\n⭕ `.env` 비밀 파일에 숨기고 `.gitignore` 처리하기', desc: '- API Key를 코드에 적나라하게 쓴 채 깃허브에 올리면 해커들이 1초 만에 긁어가서 요금 폭탄을 맞습니다. 보안은 1원칙입니다.' },
            { title: '안전벨트 꽉 매기 (과다청구 방지) 🛑', diagram: '결제 대시보드 ➡️ Hard Limit(결제 차단선) 월 5달러 강제 설정', desc: '- 시스템 자체적으로 결제 상한선을 설정해 두면 안심하고 코딩할 수 있습니다.' }
        ],
        qaList: [
            '이미 깃허브에 API 키를 올려버렸다는 메일(경고)을 받았습니다. 당장 어떻게 수습해야 하나요?',
            '.env 파일은 내 컴퓨터에만 숨기면, 나중에 인터넷에 배포할 때는 서버가 API 키를 어떻게 읽나요?',
            'AI가 알아서 코드 짜다가 제 환경변수(비밀키)를 자바스크립트 코드에 노출시키는 실수를 막으려면 어떻게 지시하나요?'
        ]
    },
    {
        id: 12,
        title: '12차시: [실전 B-1] 사용자 API 직접 입력 방식 웹 만들기',
        summary: '사용자가 본인의 API 키를 입력하게 하여 서버 유지비를 0원으로 만드는 전략을 실습합니다.',
        topic: 'User-Provided API',
        slides: [
            { title: '유지비 Zero 전략의 꽃, "네 API를 쓰렴" 🌸', diagram: '프론트엔드 UI 제공(나) ➕ AI 사용료 부담(사용자) 🟰 **내 서버비 0원!**', desc: '- 개발자는 껍데기만 제공하고, AI 통신 요금은 각 사용자가 본인의 지갑(API 키)을 열어 지불하게 만드는 경제적인 방식입니다.' },
            { title: '매번 입력하는 귀찮음 없애기 (Local Storage) 💾', diagram: '브라우저 내부 창고(`Local Storage`)에 키를 암호화하여 임시 저장', desc: '- 사용자의 웹 브라우저 보관함을 활용해 보안을 유지하면서도 자동 로그인과 같은 편의성을 제공합니다.' },
            { title: '실전 사례: 학교 전체에 뿌리는 툴 👨‍🏫', diagram: '만 명의 교사가 접속해도 서버비 걱정 없이 혁신적인 교육 툴 공유 가능', desc: '- 각자 자신의 한도를 쓰기 때문에 트래픽 부담이 전혀 없습니다.' }
        ],
        qaList: [
            '사용자가 웹사이트 입력창에 넣은 API 키를 제가 몰래 탈취할 수 없는 구조라는 걸 어떻게 증명하나요?',
            'Local Storage에 저장된 데이터는 브라우저 창을 끄면 사라지나요 영구 유지되나요?'
        ]
    },
    {
        id: 13,
        title: '13차시: [실전 B-2] 자체 API 포함 완성형 웹 만들기',
        summary: '사용자의 번거로움을 없애고 백엔드 서버를 거쳐 안전하게 통신하는 진짜 상용 서비스를 구축합니다.',
        topic: 'Full-stack Integration',
        slides: [
            { title: '진짜 상용 서비스처럼 매끄럽게 만들기 🏢', diagram: '[프론트엔드 화면] ↔️ **[내 백엔드: API 키 금고]** ↔️ [AI 모델]', desc: '- 사용자가 키를 입력할 필요 없이 바로 결과가 나오는 완벽한 서비스 형태입니다. 단, 비용은 내 API 키에서 나갑니다.' },
            { title: '프론트와 AI 사이에 검문소(서버) 세우기 🚧', diagram: '프론트 코드에 키 노출 방지 ➡️ 안전한 백엔드 서버 경유', desc: '- 내 소유의 안전한 백엔드를 구축하여 파이프라인을 꺾어주어야만 키 해킹을 방지할 수 있습니다.' },
            { title: '요금 폭탄 막는 강력한 방패 (Rate Limit & 캐싱) 🛡️', diagram: 'IP당 횟수 제한(Rate Limit) & 중복 질문 답변 복붙(Caching)', desc: '- 과금을 방어하기 위해 트래픽을 통제하는 서버측 방어 로직을 바이브 코딩으로 쉽게 구현합니다.' }
        ],
        qaList: [
            '바이브 코딩을 할 때 백엔드 언어로 파이썬, Node.js 중 어느 것을 선택하라고 AI에게 지시하는 것이 유리한가요?',
            'Rate Limit(횟수 제한) 기준을 넘어선 사용자에게는 어떤 안내 메시지나 에러 화면을 띄우게 되나요?'
        ]
    },
    // --- [신규 추가] 실전 디버깅 차시 ---
    {
        id: 14,
        title: '14차시: [심화] 에러와의 대화법 (디버깅 바이브)',
        summary: 'AI가 생성한 코드에 에러가 났을 때 당황하지 않고 원인을 추적하고 수정하는 실전 기법을 배웁니다.',
        topic: 'Debugging Strategies',
        slides: [
            { title: '에러는 실패가 아닌 친절한 이정표 🚨', diagram: '화면이 백지 상태 ➡️ 당황하여 코드 전체 삭제 (하수) ➡️ **브라우저 "개발자 도구(F12)"를 열어 빨간 글씨 확인 (고수)**', desc: '- 에러가 났을 때는 AI에게 무작정 "안 돼"라고 하기보다 브라우저 콘솔창의 빨간색 에러 로그를 복사해 주어야 AI가 단번에 해결합니다.' },
            { title: '가장 효과적인 디버깅 프롬프트 팁 🩹', diagram: '"[기대했던 동작]을 하려고 했는데, [현재 발생하는 현상]이 발생해. 에러 메시지는 [복사한 로그]야. 원인과 해결 코드를 알려줘."', desc: '- AI에게 증상을 의사에게 설명하듯 명확히 전달하는 프롬프팅이 필요합니다. 에디터 안에서 해당 파일을 지정(예: `@index.html`)하고 질문하는 것이 핵심입니다.' },
            { title: '점진적 수정과 롤백(Rollback)의 미학 🔄', diagram: '한 번에 너무 많은 기능 추가 요구 ➡️ 전체 코드 붕괴 ➡️ Git을 통해 직전 정상 상태로 복구(롤백) 후 하나씩 재요구', desc: '- AI에게 한 번에 너무 거대한 수정을 요구하면 구조가 꼬입니다. 작은 단위로 기능을 쪼개어 테스트하고, 망가졌을 때는 망설임 없이 Git으로 뒤로 돌아가는 용기가 필요합니다.' }
        ],
        qaList: [
            '브라우저에서 콘솔창(개발자 도구)은 어떻게 열고 어디를 봐야 하나요?',
            'AI가 자꾸 똑같은 에러가 나는 틀린 코드를 반복해서 제시할 때는 프롬프트를 어떻게 리셋하나요?',
            '디버깅 중에 `console.log()`라는 걸 쓰라고 하던데, 이건 뭔가요?'
        ]
    },
    // --- [신규 추가] 데이터베이스 차시 ---
    {
        id: 15,
        title: '15차시: [실전 C] 진짜 앱처럼 데이터 저장하기 (DB 연동)',
        summary: '복잡한 서버 구축 없이 BaaS(Supabase, Firebase)를 활용해 사용자의 데이터를 영구적으로 저장하고 불러옵니다.',
        topic: 'Database & BaaS',
        slides: [
            { title: '새로고침 해도 데이터가 날아가지 않으려면? 💾', diagram: '로컬 스토리지 (내 폰에만 저장, 다른 기기 연동 불가) 🆚 **클라우드 데이터베이스 (Supabase / Firebase - 모든 기기에서 데이터 공유)**', desc: '- 진정한 웹/앱 서비스가 되려면 사용자가 남긴 방명록, 퀴즈 점수, 게시글 등이 영구적으로 저장되는 DB가 반드시 필요합니다.' },
            { title: '서버 없는 서버 개발, BaaS의 마법 ☁️', diagram: '회원가입/로그인 로직 + 데이터베이스 구축 (몇 달 걸림) ➡️ **BaaS 서비스 활용 (마우스 클릭 몇 번으로 DB와 API 자동 생성)**', desc: '- Supabase(수파베이스)나 Firebase(파이어베이스) 같은 BaaS를 활용하면 초보자도 10분 만에 강력한 백엔드와 데이터베이스를 확보할 수 있습니다.' },
            { title: 'AI에게 DB 연동 지시하기 🤝', diagram: '1️⃣ Supabase에서 테이블(표) 만들기 ➡️ 2️⃣ API 주소/키 복사 ➡️ 3️⃣ AI 에이전트에게 "내 웹에서 버튼 누르면 이 Supabase 테이블에 데이터 기록하게 코드 짜줘" 지시', desc: '- 테이블(엑셀 표와 유사)을 구조화하는 법을 배우고, 프론트엔드 코드와 DB를 연결하는 코드를 AI에게 안전하게 위임하는 방법을 실습합니다.' }
        ],
        qaList: [
            '구글 스프레드시트를 데이터베이스(DB) 대신 사용하도록 AI에게 지시할 수도 있나요?',
            '데이터베이스 사용 요금은 비싼가요? 무료 한도는 얼마나 되나요?',
            '아무나 내 DB에 데이터를 쓰고 지우지 못하게 하는 보안 규칙(RLS)은 어떻게 설정하나요?'
        ]
    },
    {
        id: 16,
        title: '16차시: 깃허브(GitHub)로 내 웹 무료 배포하기',
        summary: '완성된 웹사이트를 Vercel을 통해 전 세계 인터넷망에 1분 만에 무료로 오픈합니다.',
        topic: 'Deployment (Vercel)',
        slides: [
            { title: '배포(Deployment)란? 내 컴퓨터 밖으로 나가기 🌍', diagram: '🏠 배포 전: 내 노트북 꺼지면 끝 ➡️ 🌐 배포 후: 24시간 켜져 있는 클라우드, URL 접속 가능', desc: '- 내 컴퓨터 안에만 있는 프로젝트를 거대한 데이터센터로 옮기고 고유 인터넷 주소를 부여받는 과정입니다.' },
            { title: '클릭 몇 번이면 끝나는 마법, Vercel(버셀) ⚡', diagram: '가입 ➡️ 깃허브 연결 ➡️ 배포할 프로젝트 \'Import\' ➡️ (1분 대기) 라이브 웹사이트 탄생!', desc: '- Vercel은 복잡한 서버 세팅을 생략하고 소스코드만 연동하면 알아서 서버를 세팅해 줍니다.' },
            { title: '짜잔! 자동 업데이트 (CI/CD) 🎀', diagram: '코드를 수정하고 깃허브에 다시 올림 ➡️ Vercel이 알아채고 라이브 사이트에 1분 만에 자동 반영!', desc: '- 최초 1회만 연동해 두면, 이후 깃허브 업데이트 시 자동으로 새 버전으로 사이트가 교체됩니다.' }
        ],
        qaList: [
            'Vercel의 무료 요금제 한도(트래픽 제한)를 초과하면 사이트가 차단되나요, 요금이 청구되나요?',
            'Vercel에 배포할 때 \'Missing Build Script\' 같은 에러가 나면 AI에게 어떻게 해결 코드를 달라고 해야 하나요?',
            '로컬(내 컴퓨터)에서는 잘 되던 API 연동이 Vercel 배포 후 에러가 나는 가장 흔한 원인은 무엇인가요?'
        ]
    },
    {
        id: 17,
        title: '17차시: 나만의 브랜드 도메인 연결하기',
        summary: '임시 주소는 이제 그만! 나만의 고유한 이름으로 신뢰와 전문성을 갖춘 브랜드를 완성하세요.',
        topic: 'Custom Domains',
        slides: [
            { title: '복잡한 기본 주소 대신, 나만의 간판 달기 📛', diagram: '❌ Vercel 기본 주소 (`vibe-project-random.vercel.app`) ➡️ ⭕ **개인 도메인 (`www.teachers-vibe.com`)**', desc: '- 무료 배포 주소는 임시 번호판입니다. 깔끔한 도메인을 연결하는 순간 진짜 상용 서비스의 브랜드 가치를 갖습니다.' },
            { title: '내 땅(인터넷 주소) 저렴하게 등기 치기 📜', diagram: '국내 등록 업체(가비아 등) 검색 ➡️ 원하는 이름 1년 대여 결제', desc: '- `.com`, `.co.kr` 등 원하는 확장자를 저렴하게 확보해 보세요.', links: [{ name: '가비아', url: 'https://domain.gabia.com' }] },
            { title: '산 도메인을 내 웹사이트에 씌우기 (네임서버 연결) 🔗', diagram: '[가비아 네임서버 설정] "이 주소 치면 Vercel 서버로 안내해 줘!" (매핑)', desc: '- 도메인 구매처와 서버 호스팅처 방향을 맞춰주는 \'네임서버(DNS)\' 설정으로 론칭을 최종 완료합니다.' }
        ],
        qaList: [
            '네임서버 DNS(A 레코드, CNAME 등) 설정을 똑같이 따라 했는데 왜 접속에 시간이 걸리나요?',
            '주소창에 자물쇠 모양(HTTPS 보안 연결)은 Vercel에서 자동으로 달아주나요?',
            '도메인을 한 번 사면 평생 소유하는 건가요? 만료 후 빼앗길 위험은 없나요?'
        ]
    }
];

function formatMarkdown(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-600">$1</strong>');
}

const accordionContainer = document.getElementById('accordion-container');

lessonData.forEach((lesson) => {
    const qaContentsList = lesson.qaList.map((q, i) => `
        <li class="bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[13px] md:text-[14px] font-bold text-slate-700 flex gap-3 hover:bg-white hover:border-indigo-300 transition-all group/qa leading-snug">
            <span class="text-indigo-400 group-hover/qa:text-indigo-600 transition-colors shrink-0">${i + 1}.</span> ${q}
        </li>
    `).join('');

    const itemHTML = `
        <div class="bg-cardBg rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-md overflow-hidden group">
            <header class="px-4 md:px-6 py-4 md:py-5 cursor-pointer flex items-center justify-between" onclick="toggleAccordion(${lesson.id})">
                <div class="flex items-center gap-3 md:gap-5 w-full">
                    <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center font-black text-base md:text-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shrink-0">
                        ${lesson.id}
                    </div>
                    <div class="overflow-hidden">
                        <h3 class="text-base md:text-lg font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors truncate">${lesson.title}</h3>
                        <span class="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest block truncate">${lesson.topic}</span>
                    </div>
                </div>

                <div class="flex items-center gap-2 md:gap-3 shrink-0 ml-2">
                    <div class="hidden md:flex items-center gap-1.5 p-1.5 bg-slate-50 rounded-2xl border border-slate-100" onclick="event.stopPropagation()">
                        <div class="select-wrapper">
                            <select id="ai-select-${lesson.id}" class="bg-white text-slate-600 text-xs font-bold pl-3 pr-8 py-1.5 focus:outline-none appearance-none cursor-pointer border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-200">
                                <option value="gemini">Gemini</option>
                                <option value="chatgpt">ChatGPT</option>
                                <option value="claude">Claude</option>
                                <option value="grok">Grok</option>
                            </select>
                        </div>
                        <button onclick="handleMentoring(${lesson.id})" title="AI 멘토에게 질문하기" class="p-2 hover:bg-indigo-600 bg-indigo-50 rounded-xl transition-all group/btn">
                            <i data-lucide="bot" class="w-4 h-4 md:w-5 md:h-5 text-indigo-600 group-hover/btn:text-white transition-colors"></i>
                        </button>
                    </div>
                    <div class="p-1 md:p-1.5">
                        <i data-lucide="chevron-down" id="chevron-${lesson.id}" class="chevron-icon w-4 h-4 md:w-5 md:h-5 text-slate-300"></i>
                    </div>
                </div>
            </header>

            <div id="content-${lesson.id}" class="accordion-content px-4 md:px-8">
                <div class="pt-4 border-t border-slate-50">
                    <div class="flex md:hidden items-center justify-between gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                        <select id="ai-select-mobile-${lesson.id}" class="bg-white text-slate-600 text-xs font-bold pl-2 pr-6 py-2 w-24 focus:outline-none appearance-none cursor-pointer border border-slate-200 rounded-lg shadow-sm">
                            <option value="gemini">Gemini</option>
                            <option value="chatgpt">ChatGPT</option>
                            <option value="claude">Claude</option>
                        </select>
                        <div class="flex gap-1">
                            <button onclick="handleMentoring(${lesson.id}, true)" class="p-2.5 bg-indigo-100 text-indigo-600 rounded-lg"><i data-lucide="bot" class="w-4 h-4"></i></button>
                        </div>
                    </div>

                    <div class="bg-indigo-50/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-indigo-100/50 mb-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
                        <div class="flex items-start gap-4 md:gap-5 w-full md:w-auto flex-1">
                            <div class="p-2.5 md:p-3 bg-white rounded-xl shadow-sm border border-indigo-50 shrink-0">
                                <i data-lucide="info" class="w-5 h-5 md:w-6 md:h-6 text-indigo-500"></i>
                            </div>
                            <p class="text-sm md:text-[15px] text-slate-600 font-bold leading-relaxed pt-1">
                                "${lesson.summary}"
                            </p>
                        </div>
                        <button onclick="openSlides(${lesson.id})" class="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 px-5 py-3 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all active:scale-95 group">
                            <i data-lucide="presentation" class="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"></i>
                            <span class="text-sm font-black tracking-wide">슬라이드 열기</span>
                        </button>
                    </div>

                    <div id="qna-section-${lesson.id}" class="p-5 md:p-8 bg-white rounded-[1.5rem] md:rounded-[2rem] border-2 border-indigo-100 shadow-xl overflow-hidden relative">
                        <div class="absolute -right-8 -top-8 text-indigo-50/50 hidden md:block">
                            <i data-lucide="help-circle" class="w-40 h-40"></i>
                        </div>

                        <div class="space-y-6 relative z-10 max-w-3xl mx-auto">
                            <div class="border-b-2 border-indigo-50 pb-4 mb-2">
                                <h4 class="text-xs md:text-sm font-black text-indigo-900 flex items-center gap-2">
                                    💡 이 차시에서 꼭 물어봐야 할 질문 목록
                                </h4>
                            </div>
                            <ul id="qna-list-${lesson.id}" class="grid gap-2 md:gap-3">
                                ${qaContentsList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    accordionContainer.insertAdjacentHTML('beforeend', itemHTML);
});

lucide.createIcons();

function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const chevron = document.getElementById(`chevron-${id}`);
    const card = content.parentElement;
    const isOpen = content.classList.contains('open');

    document.querySelectorAll('.accordion-content').forEach(el => {
        if (el.id !== `content-${id}`) {
            el.classList.remove('open');
            const c = document.getElementById(`chevron-${el.id.split('-')}`);
            if (c) c.classList.remove('rotated');
            el.parentElement.classList.remove('ring-4', 'ring-indigo-100');
        }
    });

    if (isOpen) {
        content.classList.remove('open');
        chevron.classList.remove('rotated');
        card.classList.remove('ring-4', 'ring-indigo-100');
    } else {
        content.classList.add('open');
        chevron.classList.add('rotated');
        card.classList.add('ring-4', 'ring-indigo-100');
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
    }
}

function copyAndOpen(text, url) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Copy failed:', err);
    }
    document.body.removeChild(textArea);

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => { });
    }

    alert("✅ 프롬프트가 클립보드에 성공적으로 복사되었습니다!\n\n확인을 누르시면 AI 웹사이트로 이동합니다.\n입력창에 '붙여넣기(Ctrl+V)'를 해주세요.");

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleMentoring(id, isMobile = false) {
    const lesson = lessonData.find(l => l.id === id);
    const selectElId = isMobile ? `ai-select-mobile-${id}` : `ai-select-${id}`;
    const selectEl = document.getElementById(selectElId) || document.getElementById(`ai-select-${id}`);
    const selectedAI = selectEl.value;

    const slideContents = lesson.slides.map((s, i) =>
        `[슬라이드 ${i + 1}] ${s.title}\n- 도식: ${s.diagram}\n- 설명: ${s.desc}`
    ).join('\n\n');
    const qaContents = lesson.qaList.map((q, i) => `${i + 1}. ${q}`).join('\n');

    const fullPrompt = `너는 코딩 마스터이자 코딩을 가르치는 아주 친절한 교육자이다.
나는 아래 [참조 자료]의 내용을 학습했는데, 궁금한 것이 많은 아주아주 초보이다. 내가 제공한 내용을 바탕으로 나를 멘토링 해줘.

[참조 자료: ${lesson.title}]
■ 요약: ${lesson.summary}

■ 슬라이드 상세 내용:
${slideContents}

■ 이 차시에서 꼭 물어봐야 할 질문(Q&A) 목록:
${qaContents}

---
[지시 사항]
너는 바이브코딩 전문 강사이다. 초보에게 적절한 정보를 쉽게 전달하고, 사용자가 배움을 확장하고 심화할 수 있도록 돕는 역할을 한다.
1. 첫 답변은 [참조 자료]의 핵심 내용을 초보자가 이해하기 쉽도록 다시 한번 요약 정리해 줘.
2. 요약 내용 하단에는 말머리 숫자번호 '1'(강조된 UI, 아래 질문과 통일성있게)을 붙여, '이 주제에 더 쉽고 자세히 설명 듣기' 선택지를 제공해 줘
3. 자세히 설명듣기 하단에는 내가 제공한 [질문(Q&A) 목록]을 말머리 숫자 번호(강조된 UI, 2번부터 시작)와 함께 보기 좋게 정리해서 제공해 줘.
4. [추천 질문 항목]을 추가해서, 위 질문 목록에는 없지만 현재 주제와 관련하여 내가 추가로 물어보면 좋을 만한 심화/호기심 유발 질문 1~2가지를 네가 먼저 제안하며 멘토링을 이어나가 줘. 말머리 번호는 [질문(Q&A) 목록]에 이어서 시작해줘.
5. [참조 자료 질문 목록],[멘토 추천 심화 질문]등의 문구를 포함하지말고, 1번부터 쭈욱 이어지도록 사용자에게 선택지를 제공해줘.
6. 질문 목록 아래에 다음 문구를 그대로 덧붙여서 나를 환영해 :
   "그리고 궁금한 것은 어떤 것이든 물어봐. 제시된 질문의 번호만 입력만 해도 좋아. 현재 고민중인 상황을 캡처해서 보여줘도 좋아!"`;

    copyAndOpen(fullPrompt, aiUrls[selectedAI]);
}

function showToast(title, sub) {
    const toast = document.getElementById('toast');
    toast.querySelector('p.font-black').textContent = title;
    toast.querySelector('p.text-[11px]').textContent = sub;
    toast.classList.remove('opacity-0', 'translate-y-40');
    setTimeout(() => toast.classList.add('opacity-0', 'translate-y-40'), 4000);
}

let currentSession = null;
let currentSlideIndex = 0;
const modal = document.getElementById('slide-modal');
const slideTitleEl = document.getElementById('slide-title');
const slideDescEl = document.getElementById('slide-desc');
const slideDiagramEl = document.getElementById('slide-diagram');
const slideLinksEl = document.getElementById('slide-links');
const slideBadge = document.getElementById('slide-badge');
const slideIndicator = document.getElementById('slide-indicator');
const progressBar = document.getElementById('progress-bar');
const btnPrev = document.getElementById('btn-prev-slide');
const btnNext = document.getElementById('btn-next-slide');
const slideWatermark = document.getElementById('slide-watermark');

function openSlides(lessonId) {
    currentSession = lessonData.find(l => l.id === lessonId);
    currentSlideIndex = 0;
    document.getElementById('modal-title').textContent = currentSession.title;
    document.getElementById('modal-session-badge').textContent = `S${String(currentSession.id).padStart(2, '0')}`;
    renderSlide();
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('opacity-100', 'translate-y-0'), 50);
    document.body.style.overflow = 'hidden';
    document.getElementById('slide-scroll-area').scrollTop = 0;
}

function closeSlides() {
    modal.classList.remove('opacity-100', 'translate-y-0');
    setTimeout(() => modal.classList.add('hidden'), 500);
    document.body.style.overflow = 'auto'; // 스크롤 복구
}

document.getElementById('btn-close-modal').addEventListener('click', closeSlides);

function renderSlide() {
    const slide = currentSession.slides[currentSlideIndex];
    const total = currentSession.slides.length;

    slideTitleEl.innerHTML = formatMarkdown(slide.title);
    slideBadge.textContent = `STAGE ${String(currentSlideIndex + 1).padStart(2, '0')}`;
    slideDiagramEl.innerHTML = formatMarkdown(slide.diagram);
    slideDescEl.innerHTML = formatMarkdown(slide.desc);
    slideWatermark.textContent = String(currentSlideIndex + 1).padStart(2, '0');

    slideIndicator.textContent = `${String(currentSlideIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    progressBar.style.width = `${((currentSlideIndex + 1) / total) * 100}%`;
    slideLinksEl.innerHTML = '';

    if (slide.links) {
        slide.links.forEach(link => {
            const btn = document.createElement('a');
            btn.href = link.url; btn.target = '_blank';
            btn.className = "flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-xl text-sm font-black shadow-md hover:bg-indigo-500 transition-all";
            btn.innerHTML = `<i data-lucide="external-link" class="w-4 h-4"></i> ${link.name}`;
            slideLinksEl.appendChild(btn);
        });
        lucide.createIcons();
    }
    btnPrev.disabled = currentSlideIndex === 0;
    btnNext.disabled = currentSlideIndex === total - 1;
    document.getElementById('slide-scroll-area').scrollTop = 0;
}

function nextSlide() { if (currentSlideIndex < currentSession.slides.length - 1) { currentSlideIndex++; renderSlide(); } }
function prevSlide() { if (currentSlideIndex > 0) { currentSlideIndex--; renderSlide(); } }

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
document.getElementById('btn-next-mobile').addEventListener('click', nextSlide);
document.getElementById('btn-prev-mobile').addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') closeSlides();
    }
});