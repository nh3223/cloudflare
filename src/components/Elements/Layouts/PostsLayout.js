import styled from 'styled-components';

import { size, layout } from '../../Styles/theme';

const { small } = size;
const { leftMargin, mediaWidth } = layout;

const PostsLayout = styled.div`
  margin-left: ${leftMargin};
  width: calc(100% - ${leftMargin});
  padding: ${small};
  overflow-y: scroll;
  @media(max-width: ${mediaWidth}) {
    margin: 0;
    padding: 0;
    width: 100%;
  }

`;

export default PostsLayout;