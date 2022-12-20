import { ApolloClient, InMemoryCache , useQuery} from '@apollo/client';
import {getSpaceX} from "./queries"

export const apolloClient = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
  });

 export function DisplaySpaceMission(){
    const { loading, error, data } = useQuery(getSpaceX ,{
        variables:{
            limit:10
        }
    });
    if (error) return <p>Error : {error.message}</p>;
    if(loading) console.log("data loading" ,data);
    if(data?.launchesPast.ships) console.log( "data is:" , data?.launchesPast.ships);

    return (
        loading ? <h2 className='bg-blue-500 font-bold mt-[200px] text-2xl p-2 text-center'>Loading Data{error}</h2>
        :
        data ? 
        data?.launchesPast.map((item, index)=>{
            return(
                <div key={index} className=" w-1/3 flex flex-col justify-center items-center shadow shadow-slate-300 p-3 text-white">
                    <h2><span className='font-bold' >mission_name: </span>{item.mission_name}</h2>
                    <h2><span className='font-bold' >Location: </span>{item.launch_site.site_name_long}</h2>
                    <h2><span className='font-bold' >Rocket: </span>{item.rocket.rocket_name}</h2>
                    <div>{item.ships.map(item=>{
                        return(
                            item?.image && <img src={item?.image} key={index} alt={"ship"} className='w-full h-[100px] rounded' />
                        )
                    }).slice(0,1)}</div>
               </div>
            )
        } 
        ).reverse()
        : <h2 className='bg-red-500 font-bold text-2xl p-2 text-center'> Error Loading Data{error}</h2>
    )
}
