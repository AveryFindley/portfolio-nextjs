import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/navigation";

export default function Home() {
  return (
    <>
    <div className={styles.orange}></div>
        <Nav />
  
<h1>Designs!  </h1>
<p>These are my finished designs</p>
    <div className={styles.pink}>
        <div className={styles.column}>
            
                
        </div>
        
    </div>
  <div className={styles.paleyellow1}> Portfolio last updated: January 28, 2026</div>
           </>
  );
}
