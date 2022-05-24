//import { Typography } from "@mui/material";
import React, {useState} from "react";
import styles from "./LoggedInMain.module.css";
import stockBgImg from "../../images/stockBgImg.jpg";
import TableOfCryptos from "../TableOfCryptos/TableOfCryptos";

import {List as VirtualizedList} from "react-virtualized";
// List of search results
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import LoggedInAppBar from "./LoggedInAppBar";
import axios from "axios";
import MyChart from "../TableOfCryptos/Chart";


const LoggedInMain = (props) => {
  const [searchDataShowing, setSearchDataShowing] = useState(false);
  function searchUiAndDataHandler(expectedParamTrue)
  {
      setSearchDataShowing(expectedParamTrue);
      //axios.get("http:localhost:3001/retrieve")
  };

  const [searchDataResults, setSearchDataResults] = useState([]);
  function settingSearchResultsData (searchResults) {
    //console.log(searchResults)
    setSearchDataResults(searchResults);
  }
  //console.log(searchDataResults)

  const watchlistDummyData = [{
    symbol:"BTC",
    name: "bitcoin"

  }]
  return (
    <>
    {/* trackSearchInputHandler={searchUiAndDataHandler} */}
    <LoggedInAppBar showSearch={searchUiAndDataHandler} searchResults={settingSearchResultsData}/>
      <div className={styles.wrappingDiv1}>
        <div className={styles.wrappingDiv2}>
          <main className={styles.main}>
            {searchDataShowing ? (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <nav aria-label="main mailbox folders">
                  <List>
                    {searchDataResults.map((coin) => 
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={coin.name} />
                      </ListItemButton>
                    </ListItem>
                    )
                    } 
                  </List>
                </nav>
              </Box>
            ) : (
              <div className={styles.divRow}>
                <div className={styles.mainGraphTrendLists}>
                  <section className={styles.mainGraphTrendListsSection1}>
                    <h1 className={styles.h1}>Welcome To Your Portfolio</h1>
                    <div className={styles.portfolioMoneyGraph}>
                      <img
                        alt="stockImgBg"
                        src={stockBgImg}
                        height="200px"
                        width="400px"
                      />
                    </div>
                  </section>
                  <section className={styles.trendingLists}>
                    <div className={styles.trendingListsDiv1}>
                      <div className={styles.trendingListsDiv2}>
                        <header>
                          <div>
                            <div className={styles.trendingListsHeaderDiv1}>
                              <h3>
                                <span
                                  className={styles.trendingListsHeaderText}
                                >
                                  Trending Cryptos
                                </span>
                              </h3>
                            </div>
                          </div>
                        </header>
                        <div className={styles.tableOfCryptos}>
                          <TableOfCryptos />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className={styles.col5}>
                  <div className={styles.sideBarContentSticky}>
                    <div className={styles.sideBarStickyDiv1}>
                      <div></div>
                      <div className={styles.experimentalCard}>
                        <div className={styles.expCardDiv1}>
                          <VirtualizedList
                            width={600}
                            height={600}
                            rowHeight={50}
                            rowCount={watchlistDummyData.length}
                            rowRenderer={({key, index, style, parent}) =>{
                              const coin = watchlistDummyData[index];

                              return <div key={key} styles={styles.watchlist}>
                                <a className={styles.watchlistClickable} href="/loggedInHomePage">
                                <div className={styles.watchlistCoinSymbol}>
                                <div className={styles.watchlistCoinSymbolInnerDiv}>
                                  <span>
                                    {coin.symbol}
                                  </span>
                                </div>
                                </div>
                                <div className={styles.watchlistCoinGraph}>
                                  <MyChart coinName={coin.name} daysForChart="1"/>
                                </div>
                                </a>
                              </div>
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             )} 
          </main>
        </div>
      </div>
    </>
  );
};

export default LoggedInMain;
