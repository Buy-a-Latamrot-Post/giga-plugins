import React, { useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Blocks, BookOpen, Check,
  ChevronDown, Code2, Download, Github, Gamepad2, Menu, MessageCircle,
  Package, Search, ShieldCheck, Sparkles, X, Zap
} from "lucide-react";
import { categories, plugins } from "./plugins.js";

function Logo() {
  return <a className="brand" href="#inicio" aria-label="Giga Plugins inicio">
    <span className="brand-mark"><Blocks size={23} /></span>
    <span>GIGA<span className="brand-accent"> PLUGINS</span><small>PLUGIN DEVELOPMENT STUDIO</small></span>
  </a>;
}

function PluginCard({ plugin }) {
  const downloadable = Boolean(plugin.downloadUrl);
  return <article className="plugin-card">
    <div className="plugin-card-top">
      <div className="plugin-icon">{plugin.icon}</div>
      <span className={`status ${plugin.status === "Disponible" ? "available" : ""}`}>
        <i />{plugin.status}
      </span>
    </div>
    <div className="plugin-category">{plugin.category}</div>
    <h3>{plugin.name}</h3>
    <p>{plugin.description}</p>
    <div className="tag-row">{plugin.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    <div className="plugin-meta">
      <span><Package size={14}/> v{plugin.version}</span>
      <span><Gamepad2 size={14}/> MC {plugin.minecraft}</span>
    </div>
    <a className={`download-button ${!downloadable ? "disabled" : ""}`}
      href={downloadable ? plugin.downloadUrl : undefined}
      target={downloadable ? "_blank" : undefined}
      rel="noreferrer"
      aria-disabled={!downloadable}
      onClick={e => { if (!downloadable) e.preventDefault(); }}>
      <Download size={16}/>{downloadable ? "Descargar plugin" : "Descarga próximamente"}
    </a>
  </article>;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredPlugins = useMemo(() => plugins.filter(plugin => {
    const matchesCategory = activeCategory === "Todos" || plugin.category === activeCategory;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || [plugin.name, plugin.description, plugin.category, ...plugin.tags]
      .join(" ").toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  }), [activeCategory, search]);

  const closeMenu = () => setMobileOpen(false);

  return <div id="inicio">
    <div className="announcement"><Sparkles size={14}/> Construimos herramientas para la próxima generación de servidores Minecraft.</div>
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menú">
          {mobileOpen ? <X/> : <Menu/>}
        </button>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#plugins" onClick={closeMenu}>Plugins</a>
          <a href="#categorias" onClick={closeMenu}>Categorías</a>
          <a href="#nosotros" onClick={closeMenu}>El estudio</a>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>Contacto <ArrowUpRight size={15}/></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="container hero-content">
          <div className="eyebrow"><span className="pulse"></span> MINECRAFT PLUGIN STUDIO</div>
          <h1>Plugins que llevan<br/>tu servidor <span>más allá.</span></h1>
          <p className="hero-copy">Creamos herramientas, sistemas y experiencias para servidores Minecraft. Tecnología útil, diseño cuidado y posibilidades sin límites.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#plugins">Explorar plugins <ArrowRight size={17}/></a>
            <a className="button button-ghost" href="#nosotros">Conocer Giga Plugins</a>
          </div>
          <div className="hero-footnote"><ShieldCheck size={16}/> Desarrollo enfocado en calidad y compatibilidad.</div>
        </div>
        <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
        <div className="hero-bottom container">
          <span>CREATIVITY / DEVELOPMENT / COMMUNITY</span>
          <a href="#plugins">DESCUBRE NUESTRO TRABAJO <ArrowDown size={14}/></a>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div><strong>{plugins.length.toString().padStart(2, "0")}</strong><span>Proyectos en catálogo</span></div>
          <div><strong>1.21+</strong><span>Enfoque en versiones actuales</span></div>
          <div><strong>GIGA</strong><span>Ideas convertidas en plugins</span></div>
        </div>
      </section>

      <section className="section container" id="plugins">
        <div className="section-heading">
          <div><div className="eyebrow">NUESTRO CATÁLOGO</div><h2>Explora nuestros <span>plugins.</span></h2></div>
          <p>Encuentra herramientas para mejorar, administrar y ampliar tu servidor.</p>
        </div>
        <div className="catalog-tools">
          <div className="category-pills" id="categorias">
            {categories.map(category => <button key={category}
              className={activeCategory === category ? "category-pill active" : "category-pill"}
              onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
          <label className="search-box"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar un plugin..." /></label>
        </div>
        {filteredPlugins.length ? <div className="plugin-grid">
          {filteredPlugins.map(plugin => <PluginCard key={plugin.id} plugin={plugin}/>)}
        </div> : <div className="empty-state"><Search size={25}/><h3>No encontramos plugins</h3><p>Prueba con otro nombre o selecciona una categoría diferente.</p><button onClick={() => {setSearch("");setActiveCategory("Todos");}}>Limpiar filtros</button></div>}
        <p className="catalog-note">Los plugins de ejemplo deben sustituirse por tus proyectos reales antes de publicar la web.</p>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">ORGANIZADOS PARA TI</div><h2>Una categoría para <span>cada idea.</span></h2></div>
            <p>Explora nuestros proyectos por área y encuentra la herramienta que necesitas.</p>
          </div>
          <div className="category-grid">
            {[
              ["01","Administración","Permisos, moderación y gestión.","◈"],
              ["02","Economía","Tiendas, monedas y sistemas de comercio.","＄"],
              ["03","Gameplay","Clanes, progresión y nuevas mecánicas.","✦"],
              ["04","PvP y combate","Herramientas para experiencias competitivas.","⚔"],
              ["05","Utilidades","Funciones prácticas para tu comunidad.","⌘"]
            ].map(item => <button className="category-card" key={item[0]} onClick={() => {setActiveCategory(item[1]);document.querySelector("#plugins").scrollIntoView({behavior:"smooth"});}}>
              <span className="category-number">{item[0]}</span><span className="category-symbol">{item[3]}</span><h3>{item[1]}</h3><p>{item[2]}</p><ArrowUpRight className="category-arrow" size={19}/>
            </button>)}
          </div>
        </div>
      </section>

      <section className="about-section section container" id="nosotros">
        <div className="about-visual">
          <div className="about-glow"></div>
          <div className="code-window">
            <div className="window-bar"><i></i><i></i><i></i><span>giga-plugin.java</span></div>
            <pre><code><b>public class</b> <em>GigaPlugins</em> {"{"}{"\n"}  <b>public void</b> create() {"{"}{"\n"}    build(<em>"your ideas"</em>);{"\n"}    improve(<em>"your server"</em>);{"\n"}  {"}"}{"\n"}{"}"}</code></pre>
            <div className="code-status"><span><Check size={13}/> Ready to create</span><span>GIGA CORE</span></div>
          </div>
          <div className="floating-chip"><Zap size={15}/> Built for Minecraft</div>
        </div>
        <div className="about-copy">
          <div className="eyebrow">CONOCE EL ESTUDIO</div>
          <h2>Somos <span>Giga Plugins.</span></h2>
          <p className="about-lead">Un estudio enfocado en crear plugins y herramientas para la comunidad de Minecraft.</p>
          <p>Creemos que cada servidor tiene una identidad propia. Por eso buscamos desarrollar sistemas que aporten valor, sean fáciles de utilizar y ayuden a los administradores a construir mejores experiencias.</p>
          <div className="about-points">
            <div><Code2/><span><b>Desarrollo</b><small>Soluciones pensadas con atención al detalle.</small></span></div>
            <div><Sparkles/><span><b>Innovación</b><small>Ideas nuevas para servidores únicos.</small></span></div>
            <div><ShieldCheck/><span><b>Compatibilidad</b><small>Enfoque en estabilidad y documentación.</small></span></div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contacto">
        <div className="container cta-inner">
          <div className="eyebrow">HAGAMOS ALGO INCREÍBLE</div>
          <h2>¿Tienes alguna pregunta<br/>o una idea para <span>un plugin?</span></h2>
          <p>Conecta con Giga Plugins y mantente al tanto de nuestros próximos proyectos.</p>
          <a className="button button-primary" href="https://discord.com/" target="_blank" rel="noreferrer">Visitar comunidad <MessageCircle size={17}/></a>
          <small>Personaliza este enlace con la invitación oficial de tu Discord.</small>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-main">
        <div><Logo/><p>Building plugins. Creating possibilities.</p></div>
        <div className="footer-links"><a href="#plugins">Plugins</a><a href="#categorias">Categorías</a><a href="#nosotros">Sobre nosotros</a><a href="#contacto">Contacto</a></div>
        <a className="back-top" href="#inicio">Volver arriba ↑</a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Giga Plugins. Todos los derechos reservados.</span><span>Hecho para la comunidad Minecraft.</span></div>
    </footer>
  </div>;
}