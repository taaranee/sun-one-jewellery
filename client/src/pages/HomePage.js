import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/product/ProductCard';

const slides = [
  {
    tag: 'Timeless Elegance',
    title: 'Crafted for Every',
    titleLine2: 'Precious Moment',
    desc: 'Discover our exclusive collection of one gram gold jewellery that defines your beauty and grace.',
    btn: 'SHOP NOW',
    link: '/products',
    image: '/images/n1.jpg',
    contain: false,
  },
  {
    tag: 'Bridal Special',
    title: 'Your Dream',
    titleLine2: 'Bridal Look',
    desc: 'Exquisite bridal jewellery sets that make your special day truly unforgettable.',
    btn: 'EXPLORE BRIDAL',
    link: '/category/bridal',
    image: '/images/h1.jpg',
    contain: true,
  },
  {
    tag: 'New Arrivals',
    title: 'Fresh From',
    titleLine2: 'Our Artisans',
    desc: 'Brand new designs crafted with love and precision. Be the first to wear the latest trends.',
    btn: 'VIEW NEW ARRIVALS',
    link: '/category/new-arrivals',
    image: '/images/b1.jpg',
    contain: false,
  },
];

const shopSections = [
  {
    title: 'Our Necklace Collection',
    desc: 'Each necklace in our collection is a masterpiece, handcrafted with the finest one gram gold. From traditional Kundan sets to modern designs, our necklaces are perfect for weddings, festivals, and everyday elegance. Every piece tells a story of timeless beauty.',
    btn: 'SHOP NECKLACES',
    link: '/products',
    image: '/images/n2.jpg',
    reverse: false,
  },
  {
    title: 'Earrings for Every Occasion',
    desc: 'From delicate studs to statement jhumkas, our earring collection has something for everyone. Lightweight yet stunning, our earrings are designed to complement every outfit and every mood. Crafted with love for the modern Indian woman.',
    btn: 'SHOP EARRINGS',
    link: '/products',
    image: '/images/e2.jpg',
    reverse: true,
  },
  {
    title: 'Bridal Collections',
    desc: 'Your wedding day deserves nothing but the best. Our bridal collections are curated with the most exquisite designs, from complete sets to individual pieces. Make your special day unforgettable with Sun One Gram Jewellery.',
    btn: 'SHOP BRIDAL',
    link: '/category/bridal',
    image: '/images/d2.jpg',
    reverse: false,
  },
];

const featuredProducts = [
  { _id: 'n1', name: 'Pearl Gold Necklace Set', price: 1899, originalPrice: 2499, images: ['/images/n1.jpg'] },
  { _id: 'e1', name: 'Gold Jhumka Earrings Set', price: 799, originalPrice: 999, images: ['/images/e1.jpg'] },
  { _id: 'b1', name: 'Gold Bangles Set', price: 1299, originalPrice: 1699, images: ['/images/b1.jpg'] },
  { _id: 'r1', name: 'Floral Gold Ring Set', price: 599, originalPrice: 799, images: ['/images/r1.jpg'] },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: '#FFF8F0' }}>

      {/* HERO SLIDER */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: slides[current].contain ? 'contain' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: slides[current].contain ? 'center right' : 'center',
              backgroundColor: slides[current].contain ? '#FFF0DC' : 'transparent',
            }}>

            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: slides[current].contain
                ? 'linear-gradient(to right, rgba(59,26,8,0.92) 0%, rgba(59,26,8,0.7) 50%, rgba(59,26,8,0.1) 100%)'
                : 'linear-gradient(to right, rgba(59,26,8,0.85) 0%, rgba(59,26,8,0.4) 60%, transparent 100%)'
            }} />

            {/* Text */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', padding: '0 80px',
              maxWidth: '650px'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  color: '#E8A84C', fontSize: '13px',
                  letterSpacing: '4px', textTransform: 'uppercase',
                  marginBottom: '16px', fontWeight: '600'
                }}>
                ✦ {slides[current].tag} ✦
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '4.5rem', color: '#FFF8F0',
                  lineHeight: '1.15', marginBottom: '20px',
                  maxWidth: '600px'
                }}>
                {slides[current].title}<br />
                <span style={{ color: '#E8A84C' }}>{slides[current].titleLine2}</span>
              </motion.h1>

              <div style={{
                width: '60px', height: '3px',
                background: 'linear-gradient(90deg, #C8862A, #E8A84C)',
                marginBottom: '20px', borderRadius: '2px'
              }} />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  color: 'rgba(255,248,240,0.9)',
                  fontSize: '16px', lineHeight: '1.8',
                  marginBottom: '36px', maxWidth: '480px'
                }}>
                {slides[current].desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}>
                <Link to={slides[current].link}>
                  <button style={{
                    background: '#512815', color: '#E8A84C',
                    border: '2px solid #E8A84C',
                    padding: '16px 44px', fontSize: '13px',
                    letterSpacing: '2px', fontWeight: '700',
                    cursor: 'pointer', borderRadius: '4px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {slides[current].btn} →
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div style={{
          position: 'absolute', bottom: '40px', left: '80px',
          display: 'flex', gap: '10px', zIndex: 10
        }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '32px' : '10px',
              height: '10px', borderRadius: '5px',
              background: i === current ? '#E8A84C' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', transition: 'all 0.3s'
            }} />
          ))}
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', right: '80px',
          color: 'rgba(232,168,76,0.8)', fontSize: '14px',
          letterSpacing: '2px', zIndex: 10
        }}>
          0{current + 1} / 0{slides.length}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: '70px 60px', background: '#FFF8F0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ color: '#C8862A', fontSize: '12px', letterSpacing: '4px', marginBottom: '10px', fontWeight: '600' }}>
            ✦ HANDPICKED FOR YOU ✦
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#512815' }}>
            Featured Products
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #C8862A, #E8A84C)', margin: '14px auto 0', borderRadius: '2px' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/products">
            <button className="btn-outline">VIEW ALL PRODUCTS</button>
          </Link>
        </div>
      </section>

      {/* SHOP SECTIONS */}
      {shopSections.map((section, i) => (
        <section key={i} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          minHeight: '500px',
          background: i % 2 === 0 ? '#FFF0DC' : '#FFF8F0'
        }}>
          <div style={{ order: section.reverse ? 2 : 1, overflow: 'hidden' }}>
            <img src={section.image} alt={section.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{
            order: section.reverse ? 1 : 2,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', padding: '70px 60px'
          }}>
            <p style={{ color: '#C8862A', fontSize: '12px', letterSpacing: '4px', marginBottom: '14px', fontWeight: '600' }}>
              ✦ SUN ONE JEWELLERY ✦
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#512815', lineHeight: '1.2', marginBottom: '20px' }}>
              {section.title}
            </h2>
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #C8862A, #E8A84C)', marginBottom: '20px', borderRadius: '2px' }} />
            <p style={{ color: '#6B3A1F', fontSize: '15px', lineHeight: '1.9', marginBottom: '34px', maxWidth: '440px' }}>
              {section.desc}
            </p>
            <Link to={section.link}>
              <button className="btn-primary">{section.btn}</button>
            </Link>
          </div>
        </section>
      ))}

      {/* TRUST BADGES */}
      <section style={{
        background: '#512815', padding: '40px 60px',
        display: 'flex', justifyContent: 'space-around',
        flexWrap: 'wrap', gap: '20px'
      }}>
        {[
          { icon: '✅', title: 'Secure Payment', sub: '100% Secure Payment' },
          { icon: '🔄', title: '7 Days Return', sub: 'Easy Return & Exchange' },
          { icon: '🚚', title: 'Free Shipping', sub: 'On orders above ₹999' },
          { icon: '🎧', title: 'Customer Support', sub: '24/7 Dedicated Support' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '28px' }}>{item.icon}</span>
            <div>
              <div style={{ color: '#E8A84C', fontSize: '14px', fontWeight: '600' }}>{item.title}</div>
              <div style={{ color: '#A0522D', fontSize: '12px' }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default HomePage;