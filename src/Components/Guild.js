import React,{Component} from 'react';
import SimpleCard from './Card'
import Layout from './Layout'
import GuildTable from './guildRank'

const cards= {
    marginLeft : 23+'%'
}

class Guild extends Component{
    render(){
        return(
            <div className="">
                <Layout/>
                <div style={cards}>
                <SimpleCard avatarImage={"../../src/images/signup_male.png"} progress={[60,45,50,100]}/>
                <SimpleCard avatarImage={"../../src/images/signup_male.png"} progress={[50,25,60,40]}/>
                <SimpleCard avatarImage={"../../src/images/signup_male.png"} progress={[70,100,50,60]}/>
                <SimpleCard avatarImage={"../../src/images/signup_male.png"} progress={[50,40,100,60]}/>
                <GuildTable/>
                </div>
            </div>
        )
    }
}

export default Guild;