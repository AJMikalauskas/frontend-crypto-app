//import { Typography } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import styles from "./LoggedInMain.module.css";
import stockBgImg from "../../images/stockBgImg.jpg";
import TableOfCryptos from "../TableOfCryptos/TableOfCryptos";

//import {List} from "react-virtualized";
// List of search results
import testImg from "../../images/logoImg.jpg";
import Box from "@mui/material/Box";
import { shadows } from '@mui/system';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from '@mui/material/ListSubheader';
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import LoggedInAppBar from "./LoggedInAppBar";
import axios from "axios";
import MyChart from "../TableOfCryptos/Chart";
import { Avatar, ListItemAvatar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const LoggedInMain = (props) => {
  // Navigating to Different URL
  let navigate = useNavigate();
  let params = useParams();


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
  //console.log(searchDataResults)

  const watchlistDummyData = [
    {
      symbol:"BTC",
      name: "Bitcoin", 
      id: "bitcoin", 
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    },
  {
    symbol:"ADA",
    name: "Cardano",
    id: "cardano",
    image : "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
  },
  {
    symbol:"LINK",
    name: "Chainlink",
    id: "chainlink",
    image: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700"
  },
]
console.log(params.coinName)

 // let watchlistDummyData = ["Bob", "Joe", "Sally", "Herb", "Grey"];
// const [coinImgStr,setCoinImgStr] = useState();
// const imagesForCryptos = [];
//  const retrieveOnlyImages = useCallback(() => {
//    let finalResult;
//   // coinNameToFilterBy = coinImgStr;
//   fetch("/coinsImages").then(res => {
//     if(res.ok) {
//       return res.json()
//     }
//   })
//   .then(jsonRes => {
//     //props.searchResults(jsonRes.filter(coin => coin.name[0].toLowerCase() === event.target.value));
//     //console.log(filteredCoins);
//     //props.searchResults(filteredCoins);
//     //jsonRes.filter()
//     //console.log(jsonRes);
//     for(let i = 0;i < watchlistDummyData.length; i++)
//     {
//       console.log(jsonRes.filter(coin => coin.id === watchlistDummyData[i].id));
//       const filteredRes = jsonRes.filter(coin => coin.id === coinNameToFilterBy);
//       imagesForCryptos.push(filteredRes);
//     }
//     console.log(imagesForCryptos);
//     //console.log(jsonRes[0].image);
//     //let changingImgSrcs = jsonRes[0].image;
//     //console.log(filteredRes[0].image);
//     //finalResult = filteredRes[0].image;
//     //return finalResult;
//     //setCoinImgStr(finalResult);
//     //return true;
//   });
//   //console.log(finalResult);
//   //return finalResult;
//   //return true;
//  }, []);

//  useEffect(() => {
//   retrieveOnlyImages();
//  }, [retrieveOnlyImages])
  return (
    <>
      {/* trackSearchInputHandler={searchUiAndDataHandler} */}
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
                    <h1 className={styles.h1}>Welcome To Your Portfolio</h1>
                    <div className={styles.portfolioMoneyGraph}>
                    {/* <MyChart coinName={params.} daysForChart="7" /> */}
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
                             {watchlistDummyData.map((coin) => (
                               // retrieveOnlyImages(coin.id) &&
                               <ListItem disablePadding onClick={() => navigate(`/loggedInHome/${coin.id}`)}>
                                <ListItemButton>
                                  <ListItemText primary={coin.name} />
                                <ListItemAvatar>
                                  {/* retrieveOnlyImages(coin.id) */}
                                  <Avatar alt="Crypto Mini Image" src={coin.image}/>
                                </ListItemAvatar>
                                </ListItemButton>
                              </ListItem>
                            ))}
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
};

export default LoggedInMain;
