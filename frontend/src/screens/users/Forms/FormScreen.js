import React from "react";
import Table from "../../../components/Form/Form";
import "./FormScreen.css"

const FormScreen = () => {
  return (
        <div className='container mx-auto px-4 md:px-48 py-5'>
            <div class="md:ml-10" style={{'font-weight': '600' ,'font-size': '34px'}}>Forms</div>
            <table class="table-fixed w-full md:mx-5 my-4 text-center" style={{'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 5px 15px'}}>
                <tbody class=" h-5 bg-gray-500">
                    <tr>
                    <td class="w-1/8 p-1  text-white dd">Form No.</td>
                    <td class="w-1/2 text-white dd">Subject</td>
                    <td class="w-1/8 text-white dd">Format</td>
                    <td class="w-1/8 text-white dd">Date</td>
                    <td class="w-1/8 text-white">Time</td>
                    </tr>
                </tbody>
            </table>
            <div>
            <table class="table-fixed w-full md:mx-5 my-5 text-center" style={{'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 5px 15px'}}>
                <tbody class="ls">
                    <tr >
                    <td class=" w-1/8 ds" >Intro to CSS</td>
                    <td class="w-1/2  ds">Adam skajtyew ueityu7eytiuwh  uewutie</td>
                    <td class="w-1/8  ds">858</td>
                    <td class="w-1/8  ds">858</td>
                    <td class="w-1/8 ">858</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            <Table formno='FORM_A' subject='fjgnwmhehhetu7sggewutueysf' format='pdf/link' date='gyfgqg' time='hg' />
            <Table formno='gf' subject='fjgf' format='pdf/link' date='gyfgqg' time='hg' />
            <Table formno='gf' subject='fjgf' format='pdf/link' date='gyfgqg' time='hg' />
        </div>
        
  );
};

export default FormScreen;
