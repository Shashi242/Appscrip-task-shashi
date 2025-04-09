import styles from '../styles/FilterSidebar.module.css';

export default function FilterSidebar({ filter, toggleFilter, setAllFilters }) {

  const allSelected = filter.men && filter.women && filter.kids;
  const noneSelected = !filter.men && !filter.women && !filter.kids;

  const handleSelectAll = () => {
    setAllFilters({ men: true, women: true, kids: true });
  };

  const handleUnselectAll = () => {
    setAllFilters({ men: false, women: false, kids: false });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.label}>CUSTOMIZABLE</div>

      <div className={styles.section}>
        <details open>
          <summary className={styles.summary}>IDEAL FOR</summary>

          <div
            className={`${styles.option} ${allSelected ? styles.active : ''}`}
            onClick={handleSelectAll}
          >
            All
          </div>

          <div
            className={`${styles.unselect} ${noneSelected ? styles.active : ''}`}
            onClick={handleUnselectAll}
          >
            Unselect all
          </div>

          <div>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filter.men}
                onChange={() => toggleFilter('men')}
              />{' '}
              Men
            </label>
          </div>

          <div>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filter.women}
                onChange={() => toggleFilter('women')}
              />{' '}
              Women
            </label>
          </div>

          <div>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filter.kids}
                onChange={() => toggleFilter('kids')}
              />{' '}
              Baby & Kids
            </label>
          </div>
        </details>
      </div>

      <details className={styles.section}>
        <summary className={styles.summary}>OCCASION</summary>
        <div className={styles.option}>All</div>
      </details>

      <details className={styles.section}>
        <summary className={styles.summary}>WORK</summary>
        <div className={styles.option}>All</div>
      </details>

      <details className={styles.section}>
        <summary className={styles.summary}>FABRIC</summary>
        <div className={styles.option}>All</div>
      </details>

      <details className={styles.section}>
        <summary className={styles.summary}>SEGMENT</summary>
        <div className={styles.option}>All</div>
      </details>

      <details className={styles.section}>
        <summary className={styles.summary}>SUITABLE FOR</summary>
        <div className={styles.option}>All</div>
      </details>

      <details className={styles.section}>
        <summary className={styles.summary}>RAW MATERIALS</summary>
        <div className={styles.option}>All</div>
      </details>

      <details className={styles.section}>
        <summary className={styles.summary}>PATTERN</summary>
        <div className={styles.option}>All</div>
      </details>
    </aside>
  );
}
