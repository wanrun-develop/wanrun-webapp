import Link from 'next/link';
import {
  Search,
  Map,
  Bookmark,
  ArrowRight,
  MapPin,
  Filter,
} from 'lucide-react';

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1602268381389-c10e9d41c1c8?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-emerald-950/70" />
        <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            愛犬と最高のドッグランを
            <br className="hidden sm:block" />
            見つけよう！
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg font-medium">
            エリアや条件から簡単検索。お気に入りのドッグランを保存して、いつでも確認できます。
          </p>
          <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex items-center gap-2 bg-amber-50/80 rounded-md px-4 py-2">
              <MapPin className="text-emerald-600" size={20} />
              <input
                type="text"
                placeholder="エリアを入力"
                className="bg-transparent w-full focus:outline-none text-gray-900 placeholder-gray-500"
              />
            </div>
            <Link
              href="/dogrun"
              className="bg-emerald-600 text-white px-8 py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              検索する
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          簡単に見つかる、すぐに行ける
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="text-emerald-600" size={32} />}
            title="かんたん検索"
            description="エリアや設備など、希望の条件からドッグランを検索できます。"
          />
          <FeatureCard
            icon={<Map className="text-emerald-600" size={32} />}
            title="マップで確認"
            description="検索結果を地図上で確認。周辺のドッグランも一目で分かります。"
          />
          <FeatureCard
            icon={<Bookmark className="text-emerald-600" size={32} />}
            title="お気に入り保存"
            description="気になるドッグランをブックマーク。後から簡単にアクセスできます。"
          />
        </div>
      </section>

      {/* Search Preview Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            探しやすい検索機能
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Filter className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">詳細な検索条件</h3>
                  <p className="text-gray-600">
                    広さ、設備、利用料金など、必要な条件を指定して検索できます。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Map className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">地図表示</h3>
                  <p className="text-gray-600">
                    現在地周辺のドッグランをマップ上で確認できます。
                  </p>
                </div>
              </div>
              <Link
                href="/dogrun"
                className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors inline-block font-medium shadow-sm"
              >
                今すぐドッグランを探す
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80"
                alt="ドッグラン"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
