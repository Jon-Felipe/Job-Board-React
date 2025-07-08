import styles from './JobCategory.module.css';

type JobCategoryLinkProps = {
  title: string;
};

function JobCategoryLink({ title }: JobCategoryLinkProps) {
  return (
    <article className={styles.jobCategoryLink}>
      <h4 className={styles.title}>{title}</h4>
    </article>
  );
}

export default JobCategoryLink;
