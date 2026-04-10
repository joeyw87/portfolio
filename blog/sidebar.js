/**
 * blog/sidebar.js
 * 블로그 공통 사이드바를 #blog-sidebar 컨테이너에 주입합니다.
 * 새 포스트 추가 시 이 파일의 recentPosts 배열만 수정하면 됩니다.
 */
(function () {
    /* ── 최근 포스트 목록 (여기만 관리) ── */
    const recentPosts = [
        {
            href: 'blog1.html',
            thumb: '../images/image_1.jpg',
            title: '소프트웨어 개발 방법론 — SDLC부터 하이브리드까지',
            date: 'August 9, 2025',
            author: '조영욱'
        },
        {
            href: 'blog2.html',
            thumb: '../images/image_3.jpg',
            title: '요구사항 분석에 대해 — 설계의 밑바탕, 프로젝트 성공의 출발점',
            date: 'February 15, 2026',
            author: '조영욱'
        }
    ];

    /* ── 카테고리 목록 ── */
    const categories = [
        { name: 'Engineering', count: 2 },
        { name: 'Architecture', count: 0 },
        { name: 'DevOps', count: 0 },
        { name: 'Career', count: 0 }
    ];

    /* ── 태그 목록 ── */
    const tags = ['SDLC', 'Agile', 'Requirements', 'Waterfall', '분석', '설계', 'Engineering'];

    /* ── 소개 문구 ── */
    const aboutText = '웹 개발자 조영욱의 기술 블로그입니다.<br>개발 방법론, 아키텍처, 실무 경험 등 개발자로서 배운 것들을 기록합니다.';

    /* ────────────────────────────────────────────── */
    /* HTML 조립                                      */
    /* ────────────────────────────────────────────── */
    function buildSidebar() {
        return `
        <div class="sidebar-box">
            <form action="#" class="search-form">
                <div class="form-group">
                    <span class="icon icon-search"></span>
                    <input type="text" class="form-control" placeholder="Search...">
                </div>
            </form>
        </div>

        <div class="sidebar-box">
            <ul class="categories">
                ${categories.map(c => `<li><a href="#">${c.name} <span>(${c.count})</span></a></li>`).join('\n                ')}
            </ul>
        </div>

        <div class="sidebar-box">
            <h3 class="heading-sidebar">Recent Blog</h3>
            ${recentPosts.map(p => `
            <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style="background-image: url(${p.thumb});"></a>
                <div class="text">
                    <h3 class="heading"><a href="${p.href}">${p.title}</a></h3>
                    <div class="meta">
                        <div><a href="#"><span class="icon-calendar"></span> ${p.date}</a></div>
                        <div><a href="#"><span class="icon-person"></span> ${p.author}</a></div>
                    </div>
                </div>
            </div>`).join('')}
        </div>

        <div class="sidebar-box">
            <h3 class="heading-sidebar">Tag Cloud</h3>
            <div class="tagcloud">
                ${tags.map(t => `<a href="#" class="tag-cloud-link">${t}</a>`).join('\n                ')}
            </div>
        </div>

        <div class="sidebar-box">
            <h3 class="heading-sidebar">About</h3>
            <p style="font-size:0.88rem;">${aboutText}</p>
        </div>`;
    }

    /* ── DOM에 주입 ── */
    const container = document.getElementById('blog-sidebar');
    if (container) {
        container.innerHTML = buildSidebar();
    }
})();
