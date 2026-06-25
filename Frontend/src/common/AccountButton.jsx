import {LogIn} from "lucide-react"

const AccountButton = ({setLoginModal}) => {
  return (
    <div className="flex items-center gap-3">
          <button
           onClick={ () => {setLoginModal(true)}}
            className="
             flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r
          from-violet-600
          to-indigo-600
          text-white
          font-medium
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-[0_12px_30px_rgba(99,102,241,0.35)]
            "
          >
            <LogIn size={18} />
            Login
          </button>
        </div>
  )
}

export default AccountButton;

