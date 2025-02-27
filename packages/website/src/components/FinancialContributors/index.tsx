import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';

import { Sponsors } from './Sponsors';
import styles from './styles.module.css';

export function FinancialContributors(): JSX.Element {
  return (
    <>
      <p>
        The TypeScript ESLint project would not be possible without the generous
        support of our financial contributors.
      </p>
      <div className={styles.sponsorsContainer}>
        <Sponsors
          className={styles.tierSponsorArea}
          include={{ link: true, name: true }}
          tier="sponsor"
          title="Platinum Sponsors"
        />
        <Sponsors
          className={styles.tierSupporterArea}
          include={{ link: true }}
          tier="supporter"
          title="Gold Supporters"
        />
        <Sponsors
          className={styles.tierOtherArea}
          tier="contributor"
          title="Silver Supporters"
        />
      </div>
      <div className={styles.linksArea}>
        <Link
          className={clsx('button button--primary', styles.become)}
          to="https://opencollective.com/typescript-eslint/contribute"
          target="_blank"
        >
          Become a financial sponsor
        </Link>
        <div className={styles.linksMore}>
          <Link
            className="button button--info button--outline"
            to="https://opencollective.com/typescript-eslint"
            target="_blank"
          >
            See all financial sponsors
          </Link>
          <Link
            className="button button--info button--outline"
            title="Sponsorship docs"
            to="https://github.com/typescript-eslint/typescript-eslint/blob/main/.github/SPONSORSHIPS.md"
            target="_blank"
          >
            Docs
          </Link>
        </div>
      </div>
    </>
  );
}
