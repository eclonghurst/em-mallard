import ContentChef from '@contentchef/contentchef-node';
import { TargetDateResolver } from './targetDateResolver';
import { useEffect, useState } from 'react';
import getEnvVariable from '../utils/getEnvVariable';

const targetDateResolver = new TargetDateResolver();

interface HeaderContent {
  header: string;
}

const cf = ContentChef(
  {
    spaceId: 'em_mallard-6702',
  },
  targetDateResolver
);

export const Header = () => {
  const [header, setHeader] = useState('');

  useEffect(() => {
    const contentChefKey = getEnvVariable('REACT_APP_CC_KEY');
    const contentChefHeaderID = getEnvVariable('REACT_APP_CC_HEADER_ID');

    const onlineChannel = cf.onlineChannel(contentChefKey, 'example-ch');
    onlineChannel
      .content<HeaderContent>({
        publicId: contentChefHeaderID,
      })
      .then((response) => {
        setHeader(response.data.payload.header);
      })
      .catch((error) => console.error('Error fetching header content', error));
  }, []);

  return <header>{header}</header>;
};
