import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { MdStore } from "react-icons/md"
import { BsCheckCircle } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"
import { FaCheckCircle } from "react-icons/fa"
import "./PaymentConfirm.css"
import { Icon } from '@iconify/react';
import { Button } from "../../components/Buttons/Button"

const PaymentComponentBackground = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  background: var(--gm-color);
  border-radius: 17px;
  margin-top: 200px;
  margin-bottom: 300px;
  margin-left: 30%;
  margin-right: 30%;
  Width : 473px;
  height: 414px;
`

const Header = styled.h1`
  padding-left: 15px;
  font-family: CHULALONGKORN;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: #ffffff;
`

function PaymentConfirm() {
  return (
    <PaymentComponentBackground className="responsive-box">
      <div>
        <div style={{ display:'flex', justifyContent:'center', paddingTop:'30px'}}>
        
        <Icon icon="mdi:store-check" style={{fontSize:'200px', color:'white'}}/>
        </div>
      </div>

      <Header>สั่งซื้อเรียบร้อย</Header>
      <div style={{ display: "flex", marginTop: "37px", justifyContent: "center" , paddingBottom:"20px"}}>
        <p style={{marginRight:"18px"}}><Button width="207" textColor="white" outline shadow={false}>ไปหน้าข้อมูลผู้ใช้</Button></p>
        <Button width="207" bg="white" textColor="linear-gradient(93.44deg, #af3b43 100%, #ea727f 100%)" outline={false} shadow>กลับหน้าหลัก</Button>
      </div>
    </PaymentComponentBackground>
  )
}

export default PaymentConfirm
