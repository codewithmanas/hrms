import styles from "../styles/HrHubNavbar.module.css";
import CompanyLogo from "../assets/company-logo.svg"
import AvatarLogo from "../assets/avatar-logo.svg"

const HrHubNavbar = () => {


  return (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.main__logo}
            onClick={() => {}}
            >
                <img
                    src={CompanyLogo}
                    height={40.12}
                    width={388.93}
                    alt="company logo"
                />
            </div>

            <div className={styles.avatar__container}
                onClick={() => {}}
            >  
                <img
                        src={AvatarLogo}
                        height={56}
                        width={40}
                        alt="avatar logo"
                    />
            </div>
        </div>
    </header>
  )
}

export default HrHubNavbar