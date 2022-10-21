import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Box, Button, Grid, Typography } from '@mui/material'
import styles from  "./style.module.css"
import SelectImageTab from './selectImageTab';
import BillingAddressTab from './billingAddressTab';
import PaymentInformation from "./paymentInformation"

const PaymentProcess = () => {

  
  const [tabIndex, setTabIndex] = useState(1);
  
  let Next = () => {
    console.log("Next", tabIndex);
    setTabIndex(tabIndex + 1);
  }

  let Back = () => {
    console.log("Back", tabIndex);
    setTabIndex(tabIndex + -1);
  }

  return (
    <Box component="section" className={styles.checkoutMainWrap}>
        <Grid container sx={{ width: '80%', margin: '0 auto' }}>
            <Grid item lg={8} md={12} xs={12} sx={{ margin: '0 auto' }}>
              <Typography variant="h3">Checkout</Typography>


              <Tabs selectedIndex={tabIndex} >

                  <TabList>
                    <Tab>Image Settings</Tab>
                    <Tab>Billing Address</Tab>
                    <Tab>Payment Information</Tab>
                  </TabList>

                  <TabPanel>
                    <Box component="section" className={styles.imagesSetting}>
                        <SelectImageTab />
                        <Box className={styles.btnsMainWrap}>
                            <Button variant="text" onClick={Next}>Next</Button>
                        </Box>
                    </Box>
                  </TabPanel>

                  <TabPanel>
                    <Box component="section" className={styles.billingAddress}>
                        <BillingAddressTab />
                        <Box className={styles.btnsMainWrap_2}>
                            <Button variant="text" onClick={Back}>Back</Button>
                            <Button variant="text" onClick={Next}>Next</Button>
                        </Box>
                    </Box>
                  </TabPanel>
                  
                  <TabPanel>
                    <Box className={styles.paymentInformation}>
                        <PaymentInformation />
                        <Box className={styles.btnsMainWrap_2}>
                          <Button variant="text" onClick={Back}>Back</Button>
                          <Button variant="text">Pay Now</Button>
                        </Box>
                    </Box>
                  </TabPanel>

                </Tabs>

          




              </Grid>
        </Grid>
    </Box>
  )
}

export default PaymentProcess
