import styled from "styled-components";

import { WorkInProgress } from "../Components/WorkInProgress";

const View_Content = styled.View`
    flex: 1;
`

export const Quiz = props => {
    return(
        <View_Content>
            <WorkInProgress />
        </View_Content>
    )
}