import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export const shardStatus = {
	0: 'Ready',
	1: 'Connecting',
	2: 'Reconnecting',
	3: 'Idle',
	4: 'Nearly',
	5: 'Disconnected',
	6: 'Waiting for guilds',
	7: 'Identifying',
	8: 'Resuming'
};

export const shardNames = {
	0: 'Wacapev',
	1: 'Atlas',
	2: 'Metis',
	3: 'Tethys'
};

export interface Shard {
  id: number;
  status: number;
  guilds: number;
  ping: number;
}

export interface Props {
  data: Shard[]
}

export async function getServerSideProps() {
  const res = await fetch(`https://api-infinity.hyrousek.tk/shards/list`);
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}

const Home: NextPage = (props: Props & any) => {
  const checkEveryX = () => {
    if (typeof window === 'undefined') return;
    
    (async() => {
      const res = await fetch('https://api-infinity.hyrousek.tk/shards/list');
      const data: Shard[] = await res.json();

      for (const shard of data) {
        // @ts-expect-error
        document.getElementById(`shardPing-${shard.id}`)?.textContent = `Ping: ${shard.ping}ms`;
        // @ts-expect-error
        document.getElementById(`shardGuilds-${shard.id}`)?.textContent = `Guilds: ${shard.guilds}`;
        // @ts-expect-error
        document.getElementById(`shardStatus-${shard.id}`)?.className = styles.green;
        // @ts-expect-error
        document.getElementById(`shardStatus-${shard.id}`)?.textContent = shardStatus[shard.status];
      }
    })();

    setTimeout(() => {
      checkEveryX();
    }, 10000)
  }

  return (
    <div>
      <Head>
        <title>Mr. Infinity - Status</title>
        <link rel='icon' href='https://cdn.discordapp.com/avatars/720321585625694239/a58c1c3f00ae92070ecb4d8045476d02.png' />

        { checkEveryX() }
      </Head>

      <div className={styles['yellow-line']}><p>Yellow Line</p></div> 
      <div className='center'>
        <div className={styles['top-text']}>
          <h1>Mr. Infinity's Status</h1>
          <p>Check bot status.</p>
        </div>

        <section>
          {
            props.data.map((shard: Shard) =>
            <div className={styles.dropdown} key={shard.id}>
              <div className={styles['shard-info']}>
                      <h3>Shard {shard.id}</h3>
                      <p id={`shardStatus-${shard.id}`} className={styles.green}>{
                      // @ts-expect-error
                      shardStatus[shard.status]}</p>
              </div>

              <div className={styles['dropdown-content']}>
                  <a id={`shardName-${shard.id}`}>Name: {
                  // @ts-expect-error
                  shardNames[shard.id]}</a>
                  <a id={`shardPing-${shard.id}`}>Ping: {shard.ping}ms</a>
                  <a id={`shardGuilds-${shard.id}`}>Guilds: {shard.guilds}</a>
              </div>
            </div>
            )
          }
        </section>
      </div>
    </div>
  )
}

export default Home
