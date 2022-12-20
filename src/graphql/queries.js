import { gql } from '@apollo/client';

export const getSpaceX = gql`
    query getSpaceX($limit: Int){
        launchesPast(limit: $limit){
            mission_name
            launch_site{
                site_name_long
            }
            rocket{
                rocket_name
            }
            ships{
                name
                image
            }
        }
    }
`