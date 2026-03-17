import './App.css'

const projects = [
  {
    name: 'MirrorList',
    desc: '容器镜像仓库管理工具，支持多区域镜像同步与查询',
    tags: ['React', 'ESA Edge', 'Docker'],
    badge: '已上线',
    url: 'https://registry.cfer.space',
  },
  {
    name: 'CFerSpace',
    desc: '个人主页与博客站点，基于 Vite + React + TypeScript',
    tags: ['React', 'TypeScript', 'Vite'],
    badge: '当前项目',
    url: 'https://cfer.space',
  },
]

const blogs = [
  { title: '使用阿里云 ESA Pages 部署静态站点', date: '2026-03-17', tag: '教程' },
  { title: '容器镜像加速：从零搭建私有 Registry Mirror', date: '2026-03-12', tag: '技术' },
  { title: 'Vite + React 项目最佳实践', date: '2026-03-10', tag: '前端' },
]

const tools = [
  { name: 'GitHub', desc: 'github.com/Feng-Yong-Qi', icon: '{}', color: '#24292e', url: 'https://github.com/Feng-Yong-Qi' },
  { name: 'MirrorList', desc: 'registry.cfer.space', icon: '🐳', color: '#0db7ed', url: 'https://registry.cfer.space' },
  { name: '阿里云 ESA', desc: 'esa.console.aliyun.com', icon: '☁️', color: '#ff6a00', url: 'https://esa.console.aliyun.com' },
  { name: 'Vite', desc: 'vite.dev', icon: '⚡', color: '#646cff', url: 'https://vite.dev' },
]

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <h1>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 17l6-6-6-6" />
                <path d="M12 19h8" />
              </svg>
              <span className="title-text">CFerSpace</span>
            </h1>
          </div>
          <nav className="nav-links">
            <a href="#projects">项目</a>
            <a href="#blog">博客</a>
            <a href="#tools">工具</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-avatar">C</div>
        <h2>Hi, 欢迎来到 CFerSpace</h2>
        <p>一个喜欢折腾技术的爱好者，热衷于云原生、容器化和前端。这里是我的个人空间，记录项目、分享技术。</p>
        <div className="hero-links">
          <a className="hero-btn primary" href="https://github.com/Feng-Yong-Qi" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.806 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
            GitHub
          </a>
          <a className="hero-btn secondary" href="#projects">
            查看项目 →
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h3 className="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          项目
        </h3>
        <p className="section-desc">我参与和维护的开源项目</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <a className="project-card" key={p.name} href={p.url} target="_blank" rel="noreferrer">
              <div className="project-header">
                <div className="project-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <span className="project-name">{p.name}</span>
                <span className="project-badge">{p.badge}</span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="section" id="blog" style={{ background: '#fff' }}>
        <h3 className="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          博客
        </h3>
        <p className="section-desc">技术笔记与经验分享</p>
        <div className="blog-list">
          {blogs.map((b) => (
            <div className="blog-item" key={b.title}>
              <div>
                <div className="blog-title">{b.title}</div>
                <div className="blog-meta">{b.date} · {b.tag}</div>
              </div>
              <span className="blog-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools / Links */}
      <section className="section" id="tools">
        <h3 className="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          工具与链接
        </h3>
        <p className="section-desc">常用的工具和资源</p>
        <div className="links-grid">
          {tools.map((t) => (
            <a className="link-card" key={t.name} href={t.url} target="_blank" rel="noreferrer">
              <div className="link-icon" style={{ background: t.color + '15', color: t.color }}>
                {t.icon}
              </div>
              <div>
                <div className="link-name">{t.name}</div>
                <div className="link-url">{t.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 <a href="https://cfer.space">CFerSpace</a> · Powered by Vite + React</p>
      </footer>
    </div>
  )
}

export default App
