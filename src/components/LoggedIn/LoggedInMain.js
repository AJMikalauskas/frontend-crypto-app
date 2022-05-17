//import { Typography } from "@mui/material";
import React from "react";
import styles from "./LoggedInMain.module.css";
import stockBgImg from "../../images/stockBgImg.jpg";
import TableOfCryptos from "../TableOfCryptos/TableOfCryptos";
const LoggedInMain = () => {
  return (
    <div className={styles.wrappingDiv1}>
      <div className={styles.wrappingDiv2}>
        <main className={styles.main}>
          <div className={styles.divRow}>
            <div className={styles.mainGraphTrendLists}>
              <section className={styles.mainGraphTrendListsSection1}>
                <h1 className={styles.h1}>Welcome To Your Portfolio</h1>
                <div className={styles.portfolioMoneyGraph}>
                    <img alt="stockImgBg" src={stockBgImg} height="200px" width="400px"/>
                </div>
              </section>
              <section className={styles.trendingLists}>
                <div className={styles.trendingListsDiv1}>
                    <div className={styles.trendingListsDiv2}>
                        <header>
                            <div>
                                <div className={styles.trendingListsHeaderDiv1}>
                                    <h3>
                                        <span className={styles.trendingListsHeaderText}>
                                        Trending Cryptos
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </header>
                        <div className={styles.tableOfCryptos}>
                            <TableOfCryptos/>
                        </div>
                    </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoggedInMain;
