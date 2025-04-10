import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Products.module.css';
import FilterSidebar from './FilterSidebar';
import Header from './Header';
import Footer from './Footer';

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ men: false, women: false, kids: false });
    const [products, setProducts] = useState([]);
    const [showFilter, setShowFilter] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleOverlayClick = (e) => {
        if (e.target.className === "modal-overlay") {
            closeModal();
        }
    };



    const setAllFilters = (values) => {
        setFilter(values);
    };

    const [likedProducts, setLikedProducts] = useState([]);
    const toggleLike = (productId) => {
        setLikedProducts((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const toggleFilter = (key) => setFilter(prev => ({ ...prev, [key]: !prev[key] }));

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
        const anyFilterSelected = filter ? Object.values(filter).some(Boolean) : false;
        const category = p.category.toLowerCase();
        const matchesFilter = !anyFilterSelected ||
            (filter?.men && category.includes('men')) ||
            (filter?.women && category.includes('women')) ||
            (filter?.kids && category.includes('kid'));
        return matchesSearch && matchesFilter;
    });    

    return (
        <>
            <Header />
            <Head>
                <title>Discover Our Products | Metta Muse</title>
                <meta name="description" content="Explore customizable fashion for men, women, and kids." />
            </Head>
            <main className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
                    <p className={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                    </p>
                </header>
                <button className={styles.toggleButton} onClick={() => setShowFilter(prev => !prev)}>
                    <div className={styles.itemCount}>3425 ITEMS</div>
                    {showFilter ? (
                        <>
                            <span className={styles.arrow}>&rsaquo;</span>
                            <span className={styles.label}>HIDE FILTER</span>
                        </>
                    ) : (
                        <>
                            <span className={styles.arrow}>&lsaquo;</span>
                            <span className={styles.label}>SHOW FILTER</span>
                        </>
                    )}
                </button>

                <div className={styles.mobileFilterBar}>
                    <button className={styles.filterButton} onClick={()=>{openModal(); setShowFilter(false)}}>FILTER</button>
                    <select className={styles.recommendedButton}>
                        <option>Recommended</option>
                        <option>Newest First</option>
                        <option>Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>


                {isModalOpen && (
                    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <span className={styles.closeButton} onClick={closeModal}>
                                &times;
                            </span>
                            <FilterSidebar filter={filter} toggleFilter={toggleFilter} setAllFilters={setAllFilters} />
                        </div>
                    </div>
                )}


                <div className={styles.mainSection}>
                    <div className={styles.filterSideBar}> {showFilter && <FilterSidebar filter={filter} toggleFilter={toggleFilter} setAllFilters={setAllFilters}/>} </div>
                    <section className={styles.productSection}>
                        <div className={styles.controls}>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <select>
                                <option>Recommended</option>
                                <option>Newest First</option>
                                <option>Popular</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                        <div className={styles.grid}>
                            {filteredProducts.map((product) => (
                                <div key={product.id} className={styles.card}>
                                    <img src={product.image} alt={product.title} className={styles.productImage} />
                                    <p className={styles.name}>{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                    {/* <p className={styles.note}>Sign up or Create an account to see pricing</p> */}
                                    <div className={styles.noteContainer}>
                                        <p className={styles.note}>Sign in or Create an account to see pricing</p>
                                        <span
                                            className={`${styles.heartIcon} ${likedProducts.includes(product.id) ? styles.liked : ''}`}
                                            onClick={() => toggleLike(product.id)}
                                        >
                                            ♥
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}