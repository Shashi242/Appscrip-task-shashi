import styles from '../styles/Footer.module.css';
import Group136190 from '../../public/icons/Group 136190.png';
import Group136192 from '../../public/icons/Group 136192.png';
import Group136193 from '../../public/icons/Group 136193.png';
import Group136194 from '../../public/icons/Group 136194.png';
import Group136195 from '../../public/icons/Group 136195.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.subscribe}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 193 3590</p>
          <p>customercare@mettamuse.com</p>
        </div>
        <div className={styles.currency}>
          <h4>CURRENCY</h4>
          <p><span>🌎</span> USD</p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </div>

      <hr className={styles.separator} />

      <div className={styles.middle}>
        <div>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4>FOLLOW US</h4>
          <p>📷  💼</p>
          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.payments}>
            <Image src={Group136190} alt="Google Pay" />
            <Image src={Group136192} alt="Visa" />
            <Image src={Group136193} alt="Mastercard" />
            <Image src={Group136194} alt="Amex" />
            <Image src={Group136195} alt="Apple Pay" />
          </div>
        </div>
      </div>

      <p className={styles.copyright}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
}