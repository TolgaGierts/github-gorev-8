import { MapPin, Link, X, Building2 } from 'lucide-react';
import moment from 'moment';

const Card = ({ user }) => {
  return (
    <div className='mt-8 bg-slate-100  rounded-2xl p-16 flex gap-16 dark:bg-[#141c2f] max-lg:flex-col max-sm:p-4'>
      <div className='w-32 h-32 flex flex-col justify-center items-center rounded-full overflow-hidden '>
        <img
          src={user.avatar_url}
          alt=''
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-1 flex-col h-full gap-8'>
        <div className='flex flex-col gap-3 justify-between'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold'>{user.login}</h1>
            <p className='text-lg text-gray-400'>
              Joined {moment(`${user.created_at}`).utc().format('DD-MM-YYYY')}
            </p>
          </div>
          <p className='text-lg text-[#0079fe]'>@{user.login}</p>
          <p className='text-lg text-gray-400 mt-4'></p>
        </div>

        <div className='w-full bg-slate-200 dark:bg-[#020817] flex justify-between py-8 px-8 rounded-xl max-sm:py-1 px-1'>
          <div>
            <p className='text-xl text-gray-400'>Repos</p>
            <p className='text-2xl mt-2 font-bold'>{user.public_repos}</p>
          </div>
          <div>
            <p className='text-xl text-gray-400'>Followers</p>
            <p className='text-2xl mt-2 font-bold'>{user.followers}</p>
          </div>
          <div>
            <p className='text-xl text-gray-400'>Following</p>
            <p className='text-2xl mt-2 font-bold'>{user.following}</p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-8 mt-8 max-sm:grid-cols-1'>
          <div className='flex items-center gap-8 '>
            <MapPin className='size-8' />
            <p className='text-slate-400 text-lg'>
              {user.location ? user.location : 'Unkown'}
            </p>
          </div>
          <div className='flex items-center gap-8 '>
            <Link className='size-8' />
            <p className='text-slate-400 text-lg overflow-hidden text-ellipsis'>
              {user.html_url ? user.html_url : 'Unkown'}
            </p>
          </div>
          <div className='flex items-center gap-8 '>
            <X className='size-8' />
            <p className='text-slate-400 text-lg'>
              {user.twitter_username ? user.twitter_username : 'Unkown'}
            </p>
          </div>
          <div className='flex items-center gap-8 '>
            <Building2 className='size-8' />
            <p className='text-slate-400 text-lg'>
              {user.company ? user.company : 'Unkown'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
