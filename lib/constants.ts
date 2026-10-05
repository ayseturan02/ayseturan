import { BlogPost } from "@/types/blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title:
      "2026'da Dağıtık Sistemlerde Konsensus: Raft ve Paxos'un Ötesine Bakış",
    slug: "dagitik-sistemlerde-konsensus-2026",
    excerpt:
      "Gerçek dünya sistemlerinde ağ gecikmelerini minimize eden modern mutabakat protokollerinin incelenmesi.",
    content: `
Büyük ölçekli dağıtık mimarilerde veri tutarlılığını (consistency) sağlamak her zaman kritik bir meydan okuma olmuştur. Geleneksel Paxos protokolünün karmaşıklığı, mühendisleri Raft gibi daha anlaşılır ve yönetilebilir state-machine replication algoritmalarına yönlendirdi.

### WAN Gecikmeleri ve Yeni Nesil Yaklaşımlar

Ancak 2026 itibarıyla, mikroservislerin global ölçekte dağılmasıyla birlikte WAN (Wide Area Network) gecikmeleri yeni optimizasyon katmanlarını zorunlu kılıyor. Multi-region (çoklu bölge) deployment senaryolarında, lider düğüm (leader node) üzerindeki baskıyı azaltmak için hash-based routing ve esnek konsensus modelleri öne çıkıyor.

> "Dağıtık sistem tasarımında en pahalı kaynak ağ üzerindeki veri transferidir; konsensus algoritmaları bu maliyeti minimize edecek şekilde evrilmektedir."

### Sonuç ve Gelecek Trendleri

Gelecekte, yapay zeka destekli yük tahminleme algoritmaları ile dinamik lider seçimi yapan hibrit konsensus yapılarının endüstri standardı haline geleceğini öngörüyoruz.
    `,
    category: "Teknoloji",
    tags: ["Raft", "Paxos", "Distributed Systems"],
    date: "25 Mart 2026",
    readTime: "5 dk okuma",
    interactions: "12k",
    featured: true,
  },
  {
    id: "2",
    title:
      "Mikroservis Karmaşasından Modüler Monolite Dönüş: 18 Aylık Deneyim Raporu",
    slug: "mikroservisten-modular-monolite-donus",
    excerpt:
      "Gereksiz ağ zıplamasının ve operasyonel yükün yerine, sınırlarla ayrılmış modüler monolit mimarisinin avantajları.",
    content: `
Her projeye mikroservis ile başlamak uzun süredir endüstri standardı haline geldi; fakat her şirket veya ürün Netflix ölçeğinde değil. 

### Dağıtık Yapının Getirdiği Görünmez Maliyetler

18 ay boyunca yönettiğimiz dağıtık bir yapıyı modüler monolite (Modular Monolith) taşıma sürecimizde karşılaştığımız zorluklar şunlardı:
* Servisler arası gRPC/REST çağrılarından kaynaklanan latency (gecikme).
* Dağıtık transaction yönetiminin (Saga Pattern vb.) getirdiği kod karmaşıklığı.
* CI/CD süreçlerindeki pipeline şişmeleri.

### Modüler Monolit ile Kazanımlar

Domain sınırlarını kesin hatlarla kod düzeyinde ayırarak, veritabanı seviyesinde ise şemaları izole ederek hem monolitik kolaylığı hem de mikroservis düzenini yakaladık. Sonuçta operasyonel maliyetlerimiz %40 oranında azaldı.
    `,
    category: "Sistem",
    tags: ["Architecture", "Backend", "DevOps"],
    date: "12 Şubat 2026",
    readTime: "7 dk okuma",
    interactions: "9.4k",
  },
  {
    id: "3",
    title: "React Native'de 120 FPS UI Optimizasyonu ve Re.pack Dönemi",
    slug: "react-native-120-fps-optimizasyonu",
    excerpt:
      "Metro bundler sınırlamalarını aşarak modern Webpack/Rspack ekosistemini mobil projelere entegre etme rehberi.",
    content: `
Mobil uygulama geliştirirken performans, kullanıcı deneyiminin kalbidir. Özellikle büyük veri setleri içeren listelerde ve karmaşık geçiş animasyonlarında ana thread'in (JS Thread) rahatlatılması hayati önem taşır.

### Metro'dan Rspack Tabanlı Yapılara Geçiş

Klasik Metro bundler yapıları büyük projelerde build sürelerini uzatabiliyor. Re.pack kullanarak modül federasyonunu React Native projelerimize uyarladık ve dinamik uzaktan güncelleme (OTA) kabiliyetlerini artırdık.

* **UI Thread Optimizasyonu:** Reanimated 3 kullanımı ile köprü maliyetlerini minimuma indirdik.
* **Bundle Boyutu:** Tree-shaking iyileştirmeleri ile ilk açılış süresini iyileştirdik.
    `,
    category: "Yazılım",
    tags: ["React Native", "Mobile", "Performance"],
    date: "04 Ocak 2026",
    readTime: "4 dk okuma",
    interactions: "8.1k",
  },
];
