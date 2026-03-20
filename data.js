const categories = ['전체보기', '1.레이아웃', '2.내비게이션', '3.콘텐츠', '4.팝업', '5.폼/입력', '6.피드백', '7.아이콘'];

const DB = [
    {
        id: 1, term: '헤더/푸터/사이드바', category: '1.레이아웃', icon: '🗂️',
        shortDesc: '웹페이지의 뼈대를 구성하는 3대 영역',
        detailDesc: '헤더는 상단(로고, 메뉴), 푸터는 하단(정보), 사이드바는 측면에 위치하여 페이지 전체 레이아웃을 형성합니다.',
        actionPrompt: '<header>상단</header>\n<aside>측면</aside>\n<footer>하단</footer>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-200 flex flex-col font-bold text-slate-500 text-sm text-center">
                <header class="bg-indigo-200 py-3 border-b border-indigo-300">헤더 (Header)</header>
                <div class="flex flex-1">
                    <aside class="w-1/3 bg-slate-300 py-4 flex items-center justify-center">사이드바</aside>
                    <main class="flex-1 bg-white py-4 flex items-center justify-center text-slate-800">메인 콘텐츠</main>
                </div>
                <footer class="bg-slate-400 text-white py-2">푸터 (Footer)</footer>
            </div>`
    },
    {
        id: 2, term: '내비게이션 바 (Nav Bar)', category: '1.레이아웃', icon: '🧭',
        shortDesc: '메뉴를 나열한 이동 막대',
        detailDesc: '웹사이트의 주요 페이지로 이동할 수 있는 링크들을 모아둔 막대(네비게이션)입니다.',
        actionPrompt: '<nav>\n  <ul>\n    <li><a href="#">홈</a></li>\n  </ul>\n</nav>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-100 p-4">
                <nav class="bg-indigo-600 text-white flex justify-between px-4 py-3 rounded-lg shadow">
                    <div class="font-bold flex items-center gap-2"><span class="bg-white text-indigo-600 rounded w-6 h-6 flex items-center justify-center">V</span>로고</div>
                    <ul class="flex gap-4 text-sm font-medium items-center">
                        <li class="hover:text-indigo-200 cursor-pointer">서비스</li>
                        <li class="hover:text-indigo-200 cursor-pointer">요금제</li>
                        <li class="hover:text-indigo-200 cursor-pointer">고객센터</li>
                    </ul>
                </nav>
            </div>`
    },
    {
        id: 3, term: '컨테이너/래퍼', category: '1.레이아웃', icon: '📦',
        shortDesc: '콘텐츠를 담고 중앙에 정렬하는 보이지 않는 큰 상자',
        detailDesc: '해상도에 상관없이 텍스트나 그림이 너무 넓게 퍼지지 않도록 최대 너비를 제한하고 중앙에 배치합니다.',
        actionPrompt: '<div class="container mx-auto max-w-5xl">\n  콘텐츠\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-200 p-4">
                <div class="w-full max-w-[200px] mx-auto bg-white h-full border-2 border-dashed border-indigo-400 flex items-center justify-center text-indigo-500 font-bold text-center text-sm p-4">
                    컨테이너 영역<br><br><span class="text-xs text-slate-400 font-normal">(max-width 제한 및 중앙 정렬 적용됨)</span>
                </div>
            </div>`
    },
    {
        id: 4, term: '디바이더 (Divider)', category: '1.레이아웃', icon: '➖',
        shortDesc: '구역을 시각적으로 나누는 가로/세로 구분선',
        detailDesc: '서로 다른 콘텐츠 그룹 사이에 얇은 선을 그어 의미적/시각적 영역을 명확히 구분합니다.',
        actionPrompt: '<!-- 수평선 긋기 -->\n<hr class="border-gray-200 my-4" />',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-white p-6 flex flex-col justify-center text-center">
                <div class="text-slate-600 font-bold mb-4">위쪽 요약 내용 영역</div>
                <hr class="border-t-2 border-slate-200 w-full my-2">
                <div class="-mt-5 mb-4"><span class="bg-white px-3 text-xs text-slate-400 border border-slate-200 rounded-full py-0.5">디바이더</span></div>
                <div class="text-slate-600 font-bold mt-2">아래쪽 상세 내용 영역</div>
            </div>`
    },
    {
        id: 5, term: '브레드크럼 (Breadcrumbs)', category: '2.내비게이션', icon: '🍞',
        shortDesc: '현재 위치를 알려주는 계층적인 링크 경로',
        detailDesc: '헨젤과 그레텔의 빵 부스러기처럼 사용자가 사이트 내에서 현재 어디에 있는지 상위 경로들을 차례로 보여줍니다.',
        actionPrompt: '<nav aria-label="breadcrumb">\n  홈 > 상의 > 셔츠\n</nav>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-50 flex items-center justify-center">
                <nav class="flex text-sm text-slate-500 bg-white px-4 py-2 border border-slate-200 rounded-lg shadow-sm">
                    <span class="hover:text-indigo-600 cursor-pointer font-medium">🏠 홈</span>
                    <span class="mx-2 text-slate-300">/</span>
                    <span class="hover:text-indigo-600 cursor-pointer font-medium">쇼핑</span>
                    <span class="mx-2 text-slate-300">/</span>
                    <span class="text-slate-800 font-bold">남성 의류</span>
                </nav>
            </div>`
    },
    {
        id: 6, term: '페이지네이션 (Pagination)', category: '2.내비게이션', icon: '🔢',
        shortDesc: '리스트 하단에 있는 페이지 번호 목록',
        detailDesc: '방대한 양의 게시물이나 데이터를 여러 페이지로 나누어 번호를 클릭해 이동할 수 있도록 합니다.',
        actionPrompt: '<div class="pagination">\n  <button>1</button>\n  <button>2</button>\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-white flex items-center justify-center p-4">
                <div class="flex gap-1 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                    <button class="px-3 py-1.5 bg-slate-50 text-slate-400 hover:bg-slate-100">&lt;</button>
                    <button class="px-3 py-1.5 bg-indigo-600 text-white font-bold pointer-events-none">1</button>
                    <button class="px-3 py-1.5 bg-white text-slate-600 hover:bg-slate-50 font-medium">2</button>
                    <button class="px-3 py-1.5 bg-white text-slate-600 hover:bg-slate-50 font-medium">3</button>
                    <button class="px-3 py-1.5 bg-slate-50 text-slate-600 hover:bg-slate-100">&gt;</button>
                </div>
            </div>`
    },
    {
        id: 7, term: '무한 스크롤 (Infinite Scroll)', category: '2.내비게이션', icon: '♾️',
        shortDesc: '스크롤을 내리면 페이지 이동 없이 계속 데이터가 로딩되는 방식',
        detailDesc: '페이지 끝에 도달하면 자동으로 다음 콘텐츠를 서버에서 불러와 끊김 없는 탐색 경험을 제공합니다.',
        actionPrompt: 'window.addEventListener("scroll", () => {\n  if(바닥에 닿았으면) 데이터 새로고침();\n})',
        render: (c) => {
            c.innerHTML = `
            <div class="h-full bg-slate-100 p-4">
                <div id="scroll-box-2" class="h-full bg-white border border-slate-200 rounded-xl overflow-y-auto p-4 custom-scrollbar relative shadow-inner">
                    <div id="infinity-items-2" class="space-y-2">
                        <div class="p-3 bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">아이템 1</div>
                        <div class="p-3 bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">아이템 2</div>
                        <div class="p-3 bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">아이템 3</div>
                        <div class="p-3 bg-slate-800 text-white border border-slate-700 text-sm font-bold text-center">스크롤을 맨 아래로 내려보세요 ↓</div>
                    </div>
                    <div id="loading-spinner-2" class="text-center py-3 text-indigo-500 font-bold text-sm hidden">로딩 중... ⏳</div>
                </div>
            </div>`;
            const box = c.querySelector('#scroll-box-2');
            let count = 0;
            const handler = () => {
                if(box.scrollTop + box.clientHeight >= box.scrollHeight - 10) {
                    const spinner = c.querySelector('#loading-spinner-2');
                    spinner.classList.remove('hidden');
                    box.removeEventListener('scroll', handler); // prevent double load
                    setTimeout(() => {
                        for(let i=0; i<3; i++) {
                            count++;
                            const div = document.createElement('div');
                            div.className = 'p-3 bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-bold animate-[fadeIn_0.5s]';
                            div.innerText = `새로 로딩된 항목 ${count}`;
                            c.querySelector('#infinity-items-2').appendChild(div);
                        }
                        spinner.classList.add('hidden');
                        box.addEventListener('scroll', handler);
                    }, 800);
                }
            };
            box.addEventListener('scroll', handler);
        }
    },
    {
        id: 8, term: '탭 (Tab)', category: '2.내비게이션', icon: '🗂',
        shortDesc: '상단 버튼을 눌러 화면 내용 전체를 전환하는 요소',
        detailDesc: '한정된 공간 안에서 여러 섹션을 나눠 보여줄 때 사용합니다. 지금 보고 계신 용어 설명/실습/복습 상단 메뉴도 탭입니다.',
        actionPrompt: '<!-- 탭 버튼 -->\n<button>메뉴 1</button>\n<button>메뉴 2</button>',
        render: (c) => {
            c.innerHTML = `
            <div class="h-full bg-white p-4 flex flex-col">
                <div class="flex border-b border-slate-200">
                    <button class="flex-1 py-2 border-b-2 border-indigo-600 font-bold text-indigo-600 bg-indigo-50" onclick="showTabEx(this, 1)">상세정보</button>
                    <button class="flex-1 py-2 font-medium text-slate-500 hover:text-slate-700" onclick="showTabEx(this, 2)">리뷰 (4)</button>
                    <button class="flex-1 py-2 font-medium text-slate-500 hover:text-slate-700" onclick="showTabEx(this, 3)">Q&A</button>
                </div>
                <div class="flex-1 bg-slate-50 p-6 border border-t-0 border-slate-200 rounded-b-lg flex flex-col gap-2 relative overflow-hidden">
                    <div id="tab-ex-1" class="text-slate-700 text-sm leading-relaxed animate-[fadeIn_0.3s]">이곳은 <b>상세정보</b> 탭 영역입니다.</div>
                    <div id="tab-ex-2" class="text-slate-700 text-sm leading-relaxed hidden animate-[fadeIn_0.3s]">고객들이 남긴 <b>리뷰 목록</b>이 표시됩니다.</div>
                    <div id="tab-ex-3" class="text-slate-700 text-sm leading-relaxed hidden animate-[fadeIn_0.3s]">판매자와 고객 간의 <b>질의응답</b> 내역입니다.</div>
                </div>
            </div>`;
            window.showTabEx = (btn, idx) => {
                Array.from(btn.parentElement.children).forEach(b => b.className = 'flex-1 py-2 font-medium text-slate-500 hover:text-slate-700');
                btn.className = 'flex-1 py-2 border-b-2 border-indigo-600 font-bold text-indigo-600 bg-indigo-50';
                for(let i=1; i<=3; i++) document.getElementById('tab-ex-'+i).classList.add('hidden');
                document.getElementById('tab-ex-'+idx).classList.remove('hidden');
            };
        }
    },
    {
        id: 9, term: '앵커 링크 (Anchor Link)', category: '2.내비게이션', icon: '⚓',
        shortDesc: '클릭 시 한 페이지 내의 특정 위치로 즉시 스크롤 이동',
        detailDesc: '긴 글이나 원페이지 사이트 등에서 목적지(#id)로 순식간에 화면을 이동시켜주는 링크입니다.',
        actionPrompt: '<a href="#target">여기를 누르면</a>\n...\n<h2 id="target">이곳으로 이동!</h2>',
        render: (c) => c.innerHTML = `
            <div class="h-full flex flex-col p-4 bg-slate-50">
                <div class="text-center mb-4">
                    <button class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold shadow-md transition transform active:scale-95" onclick="document.getElementById('ach-tgt').scrollIntoView({behavior:'smooth'})">
                        ↓ 맨 밑 도착지점으로 텔레포트
                    </button>
                </div>
                <div class="flex-1 overflow-y-auto scroll-smooth custom-scrollbar bg-white border border-slate-200 rounded-lg relative shadow-inner">
                    <div class="h-64 flex items-center justify-center text-slate-400 border-b border-slate-100 text-sm bg-stripes">중간 스크롤 영역 1</div>
                    <div class="h-64 flex items-center justify-center text-slate-400 border-b border-slate-100 text-sm">중간 스크롤 영역 2</div>
                    <div id="ach-tgt" class="h-48 bg-indigo-50 flex flex-col items-center justify-center rounded-b-lg border-t-2 border-indigo-400 transition-all duration-700">
                        <span class="text-indigo-800 font-black text-2xl mb-2">🎯 목표 지점 도달!</span>
                        <span class="text-xs text-indigo-600 font-mono bg-indigo-100 px-2 py-1 rounded-md border border-indigo-200">id="ach-tgt"</span>
                    </div>
                </div>
            </div>`
    },
    {
        id: 10, term: '히어로 섹션 (Hero Section)', category: '3.콘텐츠', icon: '🦸',
        shortDesc: '웹사이트 첫 방문 시 화면 최상단 전체를 차지하는 대형 배너',
        detailDesc: '사용자의 시선을 가정 먼저 사로잡는 구역으로, 핵심 가치 제안 문구와 주요 버튼(CTA)이 필수로 들어갑니다.',
        actionPrompt: '<section class="h-screen bg-cover bg-center flex items-center">\n  <h1>슬로건</h1>\n</section>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-900 overflow-hidden relative flex flex-col items-center justify-center text-center p-6 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-slate-900/80 to-purple-900/90"></div>
                <div class="relative z-10 w-full animate-[fadeIn_0.5s]">
                    <span class="px-3 py-1 bg-indigo-500/30 text-indigo-200 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-400/30 mb-4 inline-block">New Release</span>
                    <h1 class="text-4xl font-black text-white mb-3 tracking-tight">세상을 바꿀 코딩</h1>
                    <p class="text-slate-300 text-sm mb-6 max-w-[250px] mx-auto leading-relaxed">최고의 웹사이트를 가장 빠르고 유연하게 구축하는 새로운 기준을 제시합니다.</p>
                    <button class="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2.5 px-6 rounded-lg shadow-[0_10px_20px_-10px_rgba(99,102,241,1)] transition-transform hover:-translate-y-0.5">무료로 시작하기 ✨</button>
                </div>
            </div>`
    },
    {
        id: 11, term: '카드 (Card)', category: '3.콘텐츠', icon: '🃏',
        shortDesc: '이미지와 텍스트가 결합된 콘텐츠를 담는 깔끔한 박스',
        detailDesc: '정보를 요약해서 하나의 덩어리로 표시합니다. 쇼핑몰 상품 목록이나 뉴스 기사 등에서 가장 널리 쓰입니다.',
        actionPrompt: '<div class="card bg-white rounded-lg shadow p-4">\n  <img src="..." />\n  <h3>제목</h3>\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full flex items-center justify-center bg-slate-100 p-4">
                <div class="bg-white rounded-2xl shadow-md overflow-hidden max-w-[220px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer w-full border border-slate-200 border-b-4 border-b-slate-200 hover:border-b-indigo-500">
                    <div class="h-32 bg-indigo-50 flex items-center justify-center text-4xl group-hover:bg-indigo-100 transition-colors relative overflow-hidden">
                        <span class="relative z-10 group-hover:scale-110 transition-transform">🖼️</span>
                    </div>
                    <div class="p-4 bg-white relative">
                        <span class="inline-block text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase mb-2">UI Component</span>
                        <h3 class="font-bold text-slate-800 text-sm mb-1 group-hover:text-indigo-600 transition-colors">카드 디자인 패턴</h3>
                        <p class="text-[11px] text-slate-500 leading-relaxed max-w-full">사진과 텍스트 정보를 묶어 깔끔하게 나열할 때 사용되는 기본 레이아웃입니다.</p>
                    </div>
                </div>
            </div>`
    },
    {
        id: 12, term: '캐러셀/슬라이더 (Carousel/Slider)', category: '3.콘텐츠', icon: '🎠',
        shortDesc: '여러 콘텐츠를 가로축에서 좌우로 스와이프해서 넘겨보는 요소',
        detailDesc: '마치 회전목마(Carousel)처럼, 한정된 화면 영역 안에서 여러 개의 이미지를 돌려가며 보여줍니다.',
        actionPrompt: '<!-- Tailwind의 snap 기능 활용 -->\n<div class="flex overflow-x-auto snap-x">\n  <div class="snap-center">슬라이드1</div>\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-50 flex items-center justify-center p-4">
                <div class="w-full max-w-[280px] relative font-bold">
                    <div class="flex overflow-x-auto snap-x snap-mandatory gap-3 no-scrollbar rounded-2xl p-2 bg-white border border-slate-200 shadow-sm" id="c-track-2">
                        <div class="snap-center shrink-0 w-full h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-inner">Slide 1</div>
                        <div class="snap-center shrink-0 w-full h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-white text-3xl shadow-inner">Slide 2</div>
                        <div class="snap-center shrink-0 w-full h-40 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-3xl shadow-inner">Slide 3</div>
                    </div>
                    <!-- Controls -->
                    <button class="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 opacity-80 rounded-full bg-white shadow outline-none border border-slate-200 text-slate-600 hover:bg-slate-50 hover:scale-110 transition-all flex justify-center items-center" onclick="document.getElementById('c-track-2').scrollBy({left:-250, behavior:'smooth'})">◀</button>
                    <button class="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 opacity-80 rounded-full bg-white shadow outline-none border border-slate-200 text-slate-600 hover:bg-slate-50 hover:scale-110 transition-all flex justify-center items-center" onclick="document.getElementById('c-track-2').scrollBy({left:250, behavior:'smooth'})">▶</button>
                </div>
            </div>`
    },
    {
        id: 13, term: '아코디언 (Accordion)', category: '3.콘텐츠', icon: '↕️',
        shortDesc: '클릭 시 아래쪽으로 화면이 늘어나며 내용을 보여주는 반복 형태의 패널',
        detailDesc: '공간 절약을 위해 자주 묻는 질문(FAQ) 등에서 다량의 글을 수납할 때 최고 효율을 냅니다.',
        actionPrompt: '<details>\n  <summary>클릭하여 열기</summary>\n  <p>상세 내용이 여기에 펼쳐집니다.</p>\n</details>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-white p-6 flex flex-col justify-center max-w-sm mx-auto w-full">
                <div class="space-y-3">
                    <div class="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden transition-all hover:border-indigo-300">
                        <button class="w-full px-4 py-3 text-left font-bold text-slate-700 flex justify-between items-center outline-none group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('span').classList.toggle('rotate-180')">
                            Q. 환불할 수 있나요? <span class="text-slate-400 transition-transform duration-300">▼</span>
                        </button>
                        <div class="px-4 py-3 text-slate-600 border-t border-slate-200 hidden bg-white text-sm leading-relaxed">네, 구매 후 7일 이내라면 전액 환불이 가능합니다.</div>
                    </div>
                    <div class="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden transition-all hover:border-indigo-300">
                        <button class="w-full px-4 py-3 text-left font-bold text-slate-700 flex justify-between items-center outline-none group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('span').classList.toggle('rotate-180')">
                            Q. 배송은 얼마나 걸릴까요? <span class="text-slate-400 transition-transform duration-300">▼</span>
                        </button>
                        <div class="px-4 py-3 text-slate-600 border-t border-slate-200 hidden bg-white text-sm leading-relaxed">결제 완료 기준 영업일 2~3일 소요됩니다.</div>
                    </div>
                </div>
            </div>`
    },
    {
        id: 14, term: '테이블/리스트 (Table/List)', category: '3.콘텐츠', icon: '📋',
        shortDesc: '데이터를 비교하기 좋게 표로 만들거나 목록으로 정리하는 기본 요소',
        detailDesc: 'Row(행)와 Column(열) 구조의 테이블, 그리고 글머리 기호(ul)나 번호(ol) 구조의 리스트가 있습니다.',
        actionPrompt: '<!-- 테이블 예시 -->\n<table><tr><th>제목</th></tr></table>\n<!-- 리스트 예시 -->\n<ul><li>목록1</li></ul>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-white p-5 overflow-y-auto custom-scrollbar">
                <div class="mb-4">
                    <h4 class="font-bold text-sm text-slate-800 mb-2 px-1 border-l-4 border-indigo-500 pl-2">표 형태 (Table)</h4>
                    <table class="w-full text-left text-xs text-slate-600 border border-slate-200 rounded-lg overflow-hidden block sm:table shadow-sm">
                        <thead class="bg-slate-50"><tr class="border-b border-slate-200"><th class="px-3 py-2">등급</th><th class="px-3 py-2">권한</th></tr></thead>
                        <tbody>
                            <tr class="border-b border-slate-100"><td class="px-3 py-2 font-bold text-indigo-700">Admin</td><td class="px-3 py-2">전체 접근</td></tr>
                            <tr><td class="px-3 py-2 font-bold text-slate-700">User</td><td class="px-3 py-2">조회만 가능</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4 class="font-bold text-sm text-slate-800 mb-2 px-1 border-l-4 border-indigo-500 pl-2">목록 형태 (List)</h4>
                    <ul class="list-disc pl-5 text-[13px] text-slate-600 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-100 font-medium">
                        <li>순서가 <span class="text-indigo-600">없는</span> 언오더드 리스트 (ul)</li>
                        <li>1, 2, 3 순서가 <span class="text-indigo-600">있는</span> 오더드 리스트 (ol)</li>
                    </ul>
                </div>
            </div>`
    },
    {
        id: 15, term: '모달 (Modal)', category: '4.팝업', icon: '🪟',
        shortDesc: '배경이 어두워지며 화면 최상단 정중앙에 뜨는 이목 집중용 창',
        detailDesc: '부모 창의 기능을 일시정지 시키고, 모달 창의 "확인/취소" 액션을 진행해야만 다음으로 넘어갈 수 있게 강요하는 UI입니다.',
        actionPrompt: '<div class="absolute inset-0 bg-black/50...">\n  <div class="bg-white...">내용</div>\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full flex items-center justify-center p-4 relative bg-slate-50">
                <button class="z-10 px-6 py-3 bg-slate-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-slate-900 transition-all hover:-translate-y-0.5" onclick="document.getElementById('demo-modal2').classList.remove('hidden')">모달 테스트 오픈!</button>
                <div id="demo-modal2" class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center hidden z-50 p-4 animate-[fadeIn_0.2s_ease-out]">
                    <div class="bg-white rounded-2xl shadow-2xl p-6 w-[280px] animate-[slideUp_0.3s_ease]">
                        <h3 class="font-black text-lg mb-2 text-slate-800 flex items-center gap-2">🚨 보안 경고</h3>
                        <p class="text-sm text-slate-600 mb-6 leading-relaxed">배경 영역을 완전히 덮어 뒷면 요소를 클릭할 수 없도록 강제합니다.</p>
                        <div class="flex gap-2">
                            <button class="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors" onclick="document.getElementById('demo-modal2').classList.add('hidden')">취소</button>
                            <button class="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-colors" onclick="document.getElementById('demo-modal2').classList.add('hidden')">동의함</button>
                        </div>
                    </div>
                </div>
            </div>`
    },
    {
        id: 16, term: '툴팁 (Tooltip)', category: '4.팝업', icon: '💬',
        shortDesc: '특정 요소 위에 마우스를 올렸을 때 깜빡 나타나는 꼬리표 모양 말풍선',
        detailDesc: '화면 공간 활용을 위해 복잡한 부연 설명을 생략해두고, 사용자가 원할 때만 마우스를 올려 설명을 보도록 돕습니다.',
        actionPrompt: '<div class="group relative">\n  마우스 오버 대상\n  <div class="absolute hidden group-hover:block">설명 팝업</div>\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full flex items-center justify-center bg-white p-4">
                <div class="relative group cursor-help font-extrabold text-indigo-600 border-b-[3px] border-indigo-200 border-dotted px-2 pb-1 text-lg">
                    여기에 마우스를 올리세요!
                    <!-- 툴팁 말풍선 -->
                    <div class="absolute bottom-[110%] left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white font-medium text-xs px-4 py-2.5 rounded-lg shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10">
                        ✨ 바로 이것이 툴팁 말풍선입니다!
                        <div class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-800"></div>
                    </div>
                </div>
            </div>`
    },
    {
        id: 17, term: '드롭다운 (Dropdown)', category: '4.팝업', icon: '🔽',
        shortDesc: '클릭(또는 호버) 시 숨겨져 있던 선택지 목록 메뉴가 아래로 쭈르륵 펼쳐짐',
        detailDesc: '한정된 버튼 안에서 여러 개의 메뉴(언어 선택, 정보 수정, 프로필 등)를 공간 낭비 없이 제공합니다.',
        actionPrompt: '<div class="relative">\n  <button>선택</button>\n  <ul class="absolute top-full hidden">...</ul>\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-100 flex flex-col items-center pt-20 relative z-0">
                <div class="relative group">
                    <button class="w-56 bg-white border border-slate-300 hover:border-indigo-400 text-slate-800 px-4 py-2.5 rounded-lg shadow-sm font-bold text-sm flex justify-between items-center transition-colors">
                        <span>나의 메뉴 보기</span>
                        <span class="text-xs text-indigo-500 group-hover:rotate-180 transition-transform duration-300">▼</span>
                    </button>
                    <!-- 드롭다운 리스트 -->
                    <div class="absolute left-0 mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 overflow-hidden transform origin-top group-hover:scale-y-100 scale-y-95">
                        <div class="px-4 py-3 hover:bg-slate-50 text-sm font-medium text-slate-700 cursor-pointer flex items-center gap-2 border-b border-slate-100">⚙️ 계정 설정</div>
                        <div class="px-4 py-3 hover:bg-slate-50 text-sm font-medium text-slate-700 cursor-pointer flex items-center gap-2 border-b border-slate-100">💳 결제 내역</div>
                        <div class="px-4 py-3 hover:bg-red-50 text-sm font-bold text-red-600 cursor-pointer flex items-center gap-2">🚪 로그아웃</div>
                    </div>
                </div>
            </div>`
    },
    {
        id: 18, term: '입력창 (Input Field) / 플레이스홀더', category: '5.폼/입력', icon: '⌨️',
        shortDesc: '텍스트나 정보를 입력받는 텅 빈 상자와 형식 안내 문구',
        detailDesc: '회원가입, 게시글 작성 시 필수적입니다. 플레이스홀더는 입력 전 연한 회색으로 적혀있는 가이드라인 텍스트입니다.',
        actionPrompt: '<!-- placeholder 속성 확인 -->\n<input type="text" placeholder="검색어를 입력하세요" />',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-50 flex items-center justify-center p-4">
                <div class="w-full max-w-[260px] bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-200 transition-colors">
                    <label class="block text-[13px] font-bold text-slate-600 mb-2">프로필 아이디 지정</label>
                    <input type="text" placeholder="영문/숫자 조합 8자 이상" class="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-slate-800 placeholder-slate-400">
                    <p class="text-[10px] text-slate-400 mt-2">입력 전 연하게 옅은 회색으로 보이는 문구가 플레이스홀더입니다.</p>
                </div>
            </div>`
    },
    {
        id: 19, term: '버튼 & CTA 버튼', category: '5.폼/입력', icon: '🖱️',
        shortDesc: '단순 클릭 요소와 목표 달성을 강력히 유도하는 제일 화려한 버튼',
        detailDesc: 'CTA(Call To Action)는 행동 유도 버튼으로, 한 페이지에서 사용자가 꼭 눌러야 하는 "1순위" 버튼에 화려한 색상을 줍니다.',
        actionPrompt: '<button class="bg-indigo-600 font-bold">\n  시작하기\n</button>',
        render: (c) => c.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center gap-8 bg-white p-4">
                <div class="text-center w-full">
                    <div class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">General Button</div>
                    <button class="px-5 py-2 border-2 border-slate-200 rounded-lg text-slate-600 text-sm font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors w-full max-w-[200px]">이전 단계로</button>
                </div>
                <div class="w-20 border-b border-dashed border-slate-200"></div>
                <div class="text-center w-full">
                    <div class="text-[11px] font-black text-indigo-500 uppercase tracking-widest mb-2 animate-pulse">CTA Button</div>
                    <button class="px-6 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-[length:200%_auto] text-white font-black text-base rounded-xl shadow-[0_10px_20px_-5px_rgba(99,102,241,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(99,102,241,0.7)] hover:-translate-y-1 transform transition-all w-full max-w-[200px] hover:bg-right">
                        ⚡ 회원가입 (메인)
                    </button>
                </div>
            </div>`
    },
    {
        id: 20, term: '체크박스 / 라디오 버튼', category: '5.폼/입력', icon: '☑️',
        shortDesc: '다중 선택엔 네모(체크박스), 단일 선택엔 동그라미(라디오)',
        detailDesc: '체크박스(Checkbox)는 관심사처럼 여러 개를 고를 수 있고, 라디오 버튼(Radio)은 성별이나 최종학력처럼 단 하나만 고를 수 있습니다.',
        actionPrompt: '<!-- 다중 선택 -->\n<input type="checkbox" />\n<!-- 단일 선택(name 필수) -->\n<input type="radio" name="r1" />',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-50 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4">
                <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm w-full max-w-[200px] flex-1">
                    <div class="font-black text-sm mb-3 text-slate-800 border-b pb-2">기기를 선택 (다중) 🔲</div>
                    <label class="flex items-center gap-2 text-sm font-medium text-slate-600 mb-2 cursor-pointer hover:text-indigo-600">
                        <input type="checkbox" checked class="w-4 h-4 accent-indigo-600 cursor-pointer"> 데스크톱
                    </label>
                    <label class="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer hover:text-indigo-600">
                        <input type="checkbox" class="w-4 h-4 accent-indigo-600 cursor-pointer"> 태블릿
                    </label>
                </div>
                <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm w-full max-w-[200px] flex-1">
                    <div class="font-black text-sm mb-3 text-slate-800 border-b pb-2">색상을 선택 (단일) 🔘</div>
                    <label class="flex items-center gap-2 text-sm font-medium text-slate-600 mb-2 cursor-pointer hover:text-indigo-600">
                        <input type="radio" name="color_select" checked class="w-4 h-4 accent-indigo-600 cursor-pointer"> 블랙
                    </label>
                    <label class="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer hover:text-indigo-600">
                        <input type="radio" name="color_select" class="w-4 h-4 accent-indigo-600 cursor-pointer"> 화이트
                    </label>
                </div>
            </div>`
    },
    {
        id: 21, term: '토글/스위치 (Toggle/Switch)', category: '5.폼/입력', icon: '🔛',
        shortDesc: '실제 물리적 스위치처럼 켬/끔 (On/Off)을 직관적으로 조작',
        detailDesc: '체크박스와 원리는 완전히 동일하지만, 모바일 환경의 설정 화면에서 알림 켜기, 다크모드 적용 등을 할 때 훨씬 직관적입니다.',
        actionPrompt: '<!-- 외형만 스위치처럼 CSS로 구현됨 -->\n<input type="checkbox" class="sw" />',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-100 flex flex-col items-center justify-center p-4">
                <p class="text-xs text-slate-500 mb-4">아래 스위치를 클릭해보세요</p>
                <div class="flex items-center justify-between w-full max-w-[240px] bg-white p-4 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:border-indigo-300 transition-colors" onclick="const s = this.querySelector('.sw'); s.classList.toggle('bg-slate-200'); s.classList.toggle('bg-indigo-500'); s.children[0].classList.toggle('translate-x-[22px]'); const t = this.querySelector('.st'); if(s.classList.contains('bg-indigo-500')){t.innerText='On'; t.className='st font-bold text-indigo-600';}else{t.innerText='Off'; t.className='st font-bold text-slate-400';}">
                    <span class="font-black text-sm text-slate-800">WI-FI 모드</span>
                    <div class="flex items-center gap-3">
                        <span class="st font-bold text-slate-400 text-xs">Off</span>
                        <div class="sw relative w-11 h-6 rounded-full bg-slate-200 transition-colors duration-300 p-1 shadow-inner flex items-center">
                            <div class="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>`
    },
    {
        id: 22, term: '스피너 / 로더 (Spinner / Loader)', category: '6.피드백', icon: '🔄',
        shortDesc: '웹사이트가 멈춘 게 아니라 통신하며 로딩 중임을 알리는 뱅글뱅글 도는 애니메이션 요소',
        detailDesc: '사용자에게 "기다려주세요 열심히 작업 중입니다"라는 피드백을 시각적으로 주어 사이트를 이탈할 확률을 방지합니다.',
        actionPrompt: '<div class="animate-spin rounded-full..."></div>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-indigo-900 flex flex-col items-center justify-center space-y-5 rounded-lg p-2 relative overflow-hidden">
                <div class="absolute inset-0 bg-black/10"></div>
                <!-- 스피너 -->
                <div class="w-12 h-12 border-4 border-indigo-300/30 border-t-white border-l-white rounded-full animate-spin z-10 shadow-lg"></div>
                <div class="text-indigo-200 font-bold font-mono text-sm tracking-widest animate-pulse z-10 flex flex-col items-center gap-1">
                    <span>PROCESSING</span>
                    <span class="text-[10px] opacity-70">서버와 통신 중입니다...</span>
                </div>
            </div>`
    },
    {
        id: 23, term: '프로그레스 바 (Progress Bar)', category: '6.피드백', icon: '📊',
        shortDesc: '현재 작업이 어느 정도 완료되었는지 0~100% 막대그래프로 표시',
        detailDesc: '파일 다운로드/업로드 현황, 설문조사 페이지 진행률 등 전체 과정 중 남은 척도를 명확하게 보여줍니다.',
        actionPrompt: '<!-- 내부 가로 길이가 %로 증가함 -->\n<div class="bg-gray-200">\n  <div style="width: 50%" class="bg-blue-500"></div>\n</div>',
        render: (c) => {
            c.innerHTML = `
            <div class="h-full bg-white flex flex-col items-center justify-center px-6 sm:px-12 w-full text-slate-800 shadow-inner">
                <div class="w-full max-w-[280px]">
                    <div class="flex justify-between items-end text-[13px] font-bold text-slate-700 mb-2">
                        <span class="flex items-center gap-1.5 border border-slate-200 px-2 py-0.5 rounded-md shadow-sm"><span class="text-indigo-500">📥</span> 파일 업로드</span>
                        <span id="pb-txt" class="text-indigo-600 font-black text-sm font-mono">20%</span>
                    </div>
                    <!-- 트랙 -->
                    <div class="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden shadow-inner border border-slate-200/60 p-[1px]">
                        <!-- 바 -->
                        <div id="pb-bar" class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full w-[20%] transition-all duration-300 ease-out shadow-sm relative overflow-hidden">
                            <!-- Shimmer effect -->
                            <div class="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
                        </div>
                    </div>
                    <div class="text-center mt-6">
                        <button class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold shadow-md transition-colors" onclick="simProg()">다시 재생하기 막대 ▶</button>
                    </div>
                </div>
            </div>`;
            window.simProg = () => {
                const b=document.getElementById('pb-bar'), t=document.getElementById('pb-txt');
                let w=0; b.style.width='0%'; t.innerText='0%';
                if(window.pIntv) clearInterval(window.pIntv);
                window.pIntv = setInterval(()=>{
                    if(!document.getElementById('pb-bar')) { clearInterval(window.pIntv); return; }
                    w+=Math.floor(Math.random()*15)+5;
                    if(w>=100) { w=100; clearInterval(window.pIntv); }
                    b.style.width=w+'%'; t.innerText=w+'%';
                },400);
            };
            setTimeout(window.simProg, 100);
        }
    },
    {
        id: 24, term: '토스트/스낵바 (Toast/Snackbar)', category: '6.피드백', icon: '🍞',
        shortDesc: '화면 아래나 가장자리에 홀연히 나타났다 수 초 뒤 자연스레 사라지는 가벼운 알림',
        detailDesc: '모달(Modal) 창과 달리 현재 하고 있는 작업을 방해하지 않고 정보를 전달합니다. "클립보드에 복사됨!" 등의 메시지에 최적화되어 있습니다.',
        actionPrompt: '<div class="toast show">임시 저장되었습니다.</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full relative bg-slate-50 overflow-hidden flex flex-col items-center justify-center p-4">
                <button class="bg-indigo-500 text-white text-[13px] font-bold px-5 py-3 flex items-center gap-2 rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:bg-indigo-600 transition-all hover:-translate-y-0.5 active:scale-95" onclick="const t = document.getElementById('demm-toast'); t.classList.remove('translate-y-20', 'opacity-0'); if(window.dti) clearTimeout(window.dti); window.dti = setTimeout(()=>t.classList.add('translate-y-20', 'opacity-0'), 2500);">
                    🛎️ 토스트 알림 띄우기
                </button>
                <div class="mt-4 text-[11px] text-slate-400 font-bold">앗! 전체 화면의 "복사되었습니다!" 창도 바로 이 기술입니다.</div>
                
                <!-- 하단에 뜨는 토스트 팝업 컴포넌트 -->
                <div id="demm-toast" class="absolute bottom-6 bg-slate-800 text-white text-[13px] font-bold px-5 py-3 rounded-lg shadow-2xl flex items-center gap-2 transform translate-y-20 opacity-0 transition-all duration-[400ms] pointer-events-none">
                    <span class="text-green-400 bg-green-500/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span> 임시저장이 무사히 완료되었습니다.
                </div>
            </div>`
    },
    {
        id: 25, term: '배지 (Badge)', category: '6.피드백', icon: '🔴',
        shortDesc: '아이콘 우측 상단이나 텍스트 옆에 붙어 새로운 알림 개수나 특별한 상태를 표시하는 점',
        detailDesc: '수신된 안 읽은 메시지 개수나 "NEW", "베스트셀러" 등의 짧은 꼬리표를 강조할 때 사용하는 UI입니다.',
        actionPrompt: '<div class="relative">\n  🔔 <span class="bg-red-500 absolute...">3</span>\n</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full flex items-center justify-center gap-8 bg-white p-4">
                <!-- 숫자형 알림 뱃지 -->
                <div class="relative group cursor-pointer">
                    <div class="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-2xl shadow-sm border border-slate-200 group-hover:bg-slate-200 transition-colors">
                        🔔
                        <!-- 빨간색 둥근 배지 -->
                        <div class="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white transform transition-transform group-hover:scale-125 z-10 animate-pulse">9+</div>
                    </div>
                </div>
                <!-- 텍스트 꼬리표형 뱃지 -->
                <button class="px-4 py-2.5 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-800 text-sm font-bold border border-indigo-200 rounded-lg flex gap-2 items-center transition-colors">
                    신규 입고 모델
                    <span class="bg-indigo-600 text-white px-1.5 py-0.5 rounded text-[10px] uppercase shadow-sm tracking-wider">NEW</span>
                </button>
            </div>`
    },
    {
        id: 26, term: '햄버거/케밥 메뉴', category: '7.아이콘', icon: '🍔',
        shortDesc: '줄 3개가 가로로 겹친 햄버거 메뉴(≡) / 점 3개가 세로로 선 케밥 메뉴(⋮)',
        detailDesc: '스마트폰처럼 화면이 작은 환경에서, 전체 내비게이션 메뉴나 \'더보기(수정/삭제 등)\' 기능을 콤팩트하게 숨겨둘 때 씁니다.',
        actionPrompt: '<!-- 햄버거 아이콘 --> <div>≡</div>\n<!-- 케밥 아이콘 --> <div>⋮</div>',
        render: (c) => c.innerHTML = `
            <div class="h-full flex flex-col md:flex-row items-center justify-center bg-slate-50 gap-6 md:gap-12 p-4">
                <div class="text-center group cursor-pointer">
                    <div class="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-1.5 mx-auto shadow-sm group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors">
                        <span class="block w-6 h-[3px] bg-slate-600 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                        <span class="block w-6 h-[3px] bg-slate-600 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                        <span class="block w-6 h-[3px] bg-slate-600 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                    </div>
                    <div class="text-xs font-bold text-slate-500 mt-3 md:mt-4">햄버거 (Hamburger)<br><span class="text-[10px] text-slate-400 font-normal">전체 사이트 메뉴용</span></div>
                </div>
                
                <div class="text-center group cursor-pointer">
                    <div class="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-[4px] mx-auto shadow-sm group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors">
                        <span class="block w-[5px] h-[5px] bg-slate-600 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                        <span class="block w-[5px] h-[5px] bg-slate-600 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                        <span class="block w-[5px] h-[5px] bg-slate-600 rounded-full group-hover:bg-indigo-600 transition-colors"></span>
                    </div>
                    <div class="text-xs font-bold text-slate-500 mt-3 md:mt-4">케밥 (Kebab)<br><span class="text-[10px] text-slate-400 font-normal">더보기 (설정/삭제) 메뉴용</span></div>
                </div>
            </div>`
    },
    {
        id: 27, term: '파비콘/타이틀 (Title & Favicon)', category: '7.아이콘', icon: '🏷️',
        shortDesc: '웹 브라우저 제일 꼭대기 탭에 표시되는 작은 16x16 픽셀짜리 아이콘과 이름표 텍스트',
        detailDesc: '사용자가 탭을 여러 개 어지럽게 열어두었을 때, 아이콘 이미지 한장만 보고서도 "아, 여기가 그 사이트지!" 하며 직관적으로 돌아올 수 있게 합니다.',
        actionPrompt: '<!-- <head> 태그 안에 선언 -->\n<link rel="icon" href="favicon.ico" />\n<title>바이브 코딩</title>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-[url('https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&q=80')] bg-cover bg-center flex flex-col items-center justify-center p-4 relative">
                <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
                <div class="relative z-10 text-center w-full flex justify-center">
                    <div class="bg-slate-800/90 backdrop-blur-md rounded-t-xl overflow-hidden flex px-3 pt-3 gap-1.5 items-end shadow-2xl border border-slate-700 w-[280px]">
                        <!-- 활성화 탭 -->
                        <div class="bg-slate-100 flex-1 px-3 py-2.5 rounded-t-lg flex items-center gap-2 max-w-[150px] shadow-sm transform translate-y-px">
                            <!-- 파비콘 -->
                            <div class="w-4 h-4 rounded text-[10px] bg-indigo-600 text-white flex items-center justify-center shadow-inner shrink-0 leading-none">✨</div>
                            <!-- 타이틀 -->
                            <span class="font-bold text-slate-800 text-[11px] truncate leading-none mt-px">바이브 코딩 사전</span>
                        </div>
                        <!-- 비활성 탭 -->
                        <div class="px-3 py-2.5 rounded-t-lg flex items-center gap-2 hover:bg-slate-700/50 transition-colors flex-1 opacity-70 cursor-pointer">
                            <span class="w-3.5 h-3.5 bg-red-500 rounded-full shrink-0 border border-red-600"></span>
                            <span class="text-white text-[11px] truncate font-medium">New Tab</span>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-100 relative z-10 w-[280px] h-32 rounded-b-xl shadow-2xl flex flex-col items-center justify-center text-slate-500 text-sm font-bold border-t-0 p-4 text-center">
                    바로 이것이 여러분이 매일 보는<br><span class="text-indigo-600 underline decoration-indigo-300 underline-offset-4 mt-1">인터넷 브라우저 탭 형상</span>입니다!
                </div>
            </div>`
    },
    {
        id: 28, term: '플로팅 액션 버튼 (FAB - Floating Action Button)', category: '7.아이콘', icon: '🎈',
        shortDesc: '스크롤을 내려도 화면 맨 우측 하단에 딱 고정되어 항상 떠 있는 둥근 핵심 버튼',
        detailDesc: '모바일이나 앱 환경의 목록 페이지에서 언제든지 "새 글 작성하기(+)" 나 "실시간 채팅 상담" 기능을 빠르게 누르도록 유도할 때 쓰는 강력한 버튼입니다.',
        actionPrompt: '<button class="fixed bottom-4 right-4 bg-indigo-500 rounded-full p-4 shadow-xl text-white"> \n  +\n</button>',
        render: (c) => c.innerHTML = `
            <div class="h-full bg-slate-100 flex flex-col relative overflow-hidden border border-slate-200">
                <!-- 네비게이션 가짜 헤더 -->
                <div class="h-12 bg-white border-b border-slate-200 flex items-center px-4 font-black text-slate-700 text-sm shadow-sm z-10">질문 게시판</div>
                <!-- 배경 컨텐츠 (스크롤 유도용) -->
                <div class="flex-1 overflow-y-auto w-full custom-scrollbar p-3 space-y-3 relative">
                    <div class="h-16 bg-white border border-slate-200 rounded-[10px] shadow-sm"></div>
                    <div class="h-16 bg-white border border-slate-200 rounded-[10px] shadow-sm"></div>
                    <div class="h-16 bg-white border border-slate-200 rounded-[10px] shadow-sm"></div>
                    <div class="h-16 bg-white border border-slate-200 rounded-[10px] shadow-sm"></div>
                    <div class="h-16 bg-white border border-slate-200 rounded-[10px] shadow-sm"></div>
                </div>
                <!-- 둥둥 떠있는 FAB 버튼 -->
                <button class="absolute bottom-5 right-5 w-[52px] h-[52px] bg-indigo-600 text-white rounded-full shadow-[0_10px_20px_-5px_rgba(79,70,229,0.7)] border border-indigo-500 hover:bg-indigo-700 hover:shadow-xl hover:rotate-90 hover:scale-105 active:scale-95 transform transition-all duration-300 flex items-center justify-center text-3xl font-light focus:outline-none focus:ring-4 focus:ring-indigo-300">
                    <span class="mb-1 leading-none inline-block text-[32px]">+</span>
                </button>
            </div>`
    }
];

window.DB = DB;
window.categories = categories;
