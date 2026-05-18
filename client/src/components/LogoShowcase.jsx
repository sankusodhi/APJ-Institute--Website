import React from "react";
import Logo from "./Logo";

const LogoShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          APJ Institute Logo
        </h1>
        <p className="text-center text-gray-600 mb-16">
          Professional Educational Institute Branding
        </p>

        {/* Logo Sizes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Small (32px)</h3>
            <div className="flex justify-center">
              <Logo size="sm" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Medium (48px)</h3>
            <div className="flex justify-center">
              <Logo size="md" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Large (64px)</h3>
            <div className="flex justify-center">
              <Logo size="lg" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">XL (80px)</h3>
            <div className="flex justify-center">
              <Logo size="xl" />
            </div>
          </div>
        </div>

        {/* Full Size Logo */}
        <div className="bg-white p-12 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Full Logo</h2>
          <div className="flex justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-lg">
            <Logo size="full" />
          </div>
        </div>

        {/* Usage Examples */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Navbar Example */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center gap-3">
              <Logo size="sm" />
              <span className="text-white font-bold text-lg">APJ Institute</span>
            </div>
            <p className="p-4 text-gray-600 text-sm">
              ✓ Perfect for website navbar
            </p>
          </div>

          {/* Favicon Example */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Logo size="sm" className="scale-75" />
            </div>
            <p className="text-gray-600 text-sm">
              ✓ Suitable for favicon
            </p>
          </div>
        </div>

        {/* Logo Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Logo Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Circular Design</h3>
                <p className="text-gray-600 text-sm">Professional circular emblem style</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Blue + Gold Colors</h3>
                <p className="text-gray-600 text-sm">Premium institutional branding</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Graduation Cap</h3>
                <p className="text-gray-600 text-sm">Educational symbol</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Open Book</h3>
                <p className="text-gray-600 text-sm">Knowledge and learning</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Laurel Wreath</h3>
                <p className="text-gray-600 text-sm">Achievement and excellence</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Academic Shield</h3>
                <p className="text-gray-600 text-sm">Professional emblem</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Instructions */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Usage Instructions</h2>
          <ul className="space-y-2 text-sm">
            <li>✓ Import Logo component: <code className="bg-black/20 px-2 py-1 rounded">import Logo from './components/Logo'</code></li>
            <li>✓ Use in components: <code className="bg-black/20 px-2 py-1 rounded">&lt;Logo size="md" /&gt;</code></li>
            <li>✓ Available sizes: sm, md, lg, xl, full</li>
            <li>✓ SVG format ensures crisp display at any size</li>
            <li>✓ Transparent background for flexible placement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
