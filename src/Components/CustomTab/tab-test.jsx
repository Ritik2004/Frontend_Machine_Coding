import Tabs from "./tab";


function RandomComponent(){
    return <h1>This is RandomComponent</h1>
}

export default function TabTest(){


    const tabs = [
        {
            label:'Tab1',
            content:<h1>This is tab1.</h1>
        },
        {
            label:'Tab2',
            content:<h1>This is tab2.</h1>
        },
        {
            label:'Tab3',
            content:<RandomComponent/>
        },
    ]
   function handleChange(currentTabIndex){
        console.log(currentTabIndex)
   }
   return <Tabs tabsContent={tabs} onChange={handleChange}/>
}