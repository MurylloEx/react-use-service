import React, { FunctionComponent, useEffect } from 'react';
import { useApod } from 'src/core/hooks';
import { Paragraph, Picture, Render, Title } from 'src/core/components';
import { Container } from './styles';

export interface HomePageProps { }

export const HomePage: FunctionComponent<HomePageProps> = () => {
  const { 
    isError, 
    isSuccess, 
    isLoading, 
    data: apod, 
    refetch: getApod
  } = useApod();

  useEffect(() => {
    getApod();
  }, []);

  return (
    <Render if={isSuccess && !isError && !isLoading}>
      <Container>
        <Picture source={apod?.data.url || ''} />
        <Title>{apod?.data.title || ''}</Title>
        <Paragraph>{apod?.data.explanation || ''}</Paragraph>
      </Container>
    </Render>
  );
}
