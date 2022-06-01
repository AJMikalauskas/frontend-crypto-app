import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from '@mui/material/ListSubheader';
import LoggedInAppBar from "../LoggedIn/LoggedInAppBar";
import { useNavigate } from "react-router-dom";
import styles from "../LoggedIn/LoggedInMain.module.css";
import ListItemButton from "@mui/material/ListItemButton";
//import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const SpecificCrypto = (props) => {
    let navigate = useNavigate();


    const [searchDataShowing, setSearchDataShowing] = useState(false);
    function searchUiAndDataHandler(expectedParamTrue) {
      setSearchDataShowing(expectedParamTrue);
      //axios.get("http:localhost:3001/retrieve")
    }
  
    const [searchDataResults, setSearchDataResults] = useState([]);
    function settingSearchResultsData(searchResults) {
      //console.log(searchResults)
      setSearchDataResults(searchResults);
    }

    return (
        <>
            {/* <h1 style={{ marginTop: "500px"}}>{specificcryptoName}</h1> */}
            <LoggedInAppBar
        showSearch={searchUiAndDataHandler}
        searchResults={settingSearchResultsData}
      />
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
                    {searchDataResults.map((coin) => (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary={coin.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </nav>
              </Box>
            ) : (
              <div className={styles.divRow}>
                <div className={styles.mainGraphTrendLists}>
                  <section className={styles.mainGraphTrendListsSection1}>
                    {/* <h1 className={styles.h1}>Welcome To Your Portfolio</h1>
                    <div className={styles.portfolioMoneyGraph}>
                      <img
                        alt="stockImgBg"
                        src={stockBgImg}
                        height="200px"
                        width="400px"
                      />
                    </div> */}
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
                        {/* <div className={styles.tableOfCryptos}>
                          <TableOfCryptos />
                        </div> */}
                      </div>
                    </div>
                  </section>
                </div>
                <div className={styles.col5}>
                  <div className={styles.sideBarContentSticky}>
                    <div className={styles.sideBarStickyDiv1}>
                      <div></div>
                      <div className={styles.experimentalCard}>
                        {/* <div className={styles.expCardDiv1}> */}
                           {/* React Virtualized List */}
                           {/* <List
                            width={600}
                            height={600}
                            rowHeight={50}
                            rowCount={watchlistDummyData.length}
                            rowRenderer={({key, index,  isScrolling, isVisible, style}) => {

                              return (
                                <>
                                <div key={key} style={style}>
                                    <a className={styles.watchlistClickable} href="/loggedInHomePage">
                                 <div className={styles.watchlistCoinSymbol}>
                                 <div className={styles.watchlistCoinSymbolInnerDiv}>
                                   <span className={styles.watchlistNameOfCoinSpan}>
                                     {watchlistDummyData[index].name}
                                   </span>
                                   </div>
                                   <div className={styles.watchlistAfterExtraInnerDiv}>
                                      <div style={{ minWidth: "0px"}}>
                                      </div>
                                   </div>
                                 </div>
                                 <div className={styles.watchlistCoinGraph}>
                                   <div>
                                     // probably need to change to dynamic for chart so that its not 400px, send in via props //
                                   <MyChart coinName={watchlistDummyData[index].name} daysForChart="1"/>
                                  </div>
                                 </div>
                                 </a>
                                </div>
                              <div key={key} styles={style}>
                                <a className={styles.watchlistClickable} href="/loggedInHomePage">
                                <div className={styles.watchlistCoinSymbol}>
                                <div className={styles.watchlistCoinSymbolInnerDiv}>
                                  <span>
                                    {watchlistDummyData[index].symbol}
                                  </span>
                                </div>
                                </div>
                                </a>
                              </div>
                              </>
                              );
                            }}
                          />  */}
                          <Box sx={{ boxShadow: 3}}>
                          <List sx={{ bgcolor: "background.paper"}} component="nav" 
                          subheader={
                            <ListSubheader component="div" id="nested-list-subheader" sx={{ color: "#1976d2",          fontSize: '0.875rem',
                            fontWeight: '700'}}>
                            Watchlist
                          </ListSubheader>
                          }>
                          {/* <ListItem >
                                <ListItemButton>
                                  <ListItemText primary="Test"/>
                                </ListItemButton>
                              </ListItem>
                              <ListItem >
                                <ListItemButton>
                                  <ListItemText primary="Test"/>
                                </ListItemButton>
                              </ListItem> */}
                             {/* {watchlistDummyData.map((coin) => (
                               // retrieveOnlyImages(coin.id) &&
                               <ListItem disablePadding onClick={() => navigate(`${coin.id}`)}>
                                <ListItemButton>
                                  <ListItemText primary={coin.name} />
                                <ListItemAvatar>
                                  {/* retrieveOnlyImages(coin.id) 
                                  <Avatar alt="Crypto Mini Image" src={coin.image}/>
                                </ListItemAvatar>
                                </ListItemButton>
                              </ListItem>
                            ))} */}
                          </List>
                          </Box>
                        {/* </div> */}
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
}

export default SpecificCrypto;