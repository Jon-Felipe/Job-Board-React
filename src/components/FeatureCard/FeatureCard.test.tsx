import { render, screen } from '@testing-library/react';
import FeatureCard from './FeatureCard';
import { FaRegFileAlt } from 'react-icons/fa';

describe('FeatureCard Component', () => {
  it('should render component', () => {
    render(
      <FeatureCard
        title='Create your resume'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        icon={<FaRegFileAlt />}
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Create your resume' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      )
    ).toBeInTheDocument();
  });

  it('should render component without icon', () => {
    render(
      <FeatureCard
        title='Create your resume'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Create your resume' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      )
    ).toBeInTheDocument();
  });
});
