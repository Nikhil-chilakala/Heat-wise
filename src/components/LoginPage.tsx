import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Flame, ShieldCheck, CheckCircle2, ArrowLeft, LogOut, Award, Sparkles, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onBackToApp?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onBackToApp }) => {
  const { user, loading, error, signInWithGoogle, signOut, clearError } = useAuth();

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-between selection:bg-amber-200">
      
      {/* Top bar back link */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={onBackToApp}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-200 px-3.5 py-2 rounded-lg transition-colors shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to HeatWise Guide</span>
        </button>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md w-full space-y-8">
          
          {/* Card Container */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm space-y-6">
            
            {/* Logo and Brand Header */}
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto shadow-sm shadow-orange-500/20">
                <Flame className="w-7 h-7 fill-white/20" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-stone-900 font-display tracking-tight">
                  {user ? 'Welcome Back!' : 'Sign in to HeatWise'}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  {user 
                    ? 'You are securely signed in with Google.'
                    : 'Track your kitchen safety habits and save quiz achievements.'}
                </p>
              </div>
            </div>

            {/* Error Notification */}
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p>{error}</p>
                  <button
                    onClick={clearError}
                    className="text-[11px] underline font-semibold mt-1 hover:text-rose-950"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* If User is already signed in */}
            {user ? (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex items-center gap-3.5">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User profile'}
                      className="w-12 h-12 rounded-full border border-stone-200 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center text-base">
                      {user.displayName ? user.displayName.charAt(0) : 'U'}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-stone-900 truncate">
                      {user.displayName || 'Home Cook'}
                    </h3>
                    <p className="text-xs text-stone-500 truncate">
                      {user.email}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                      Google Verified Account
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={onBackToApp}
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-orange-600 active:bg-orange-700 transition-colors shadow-xs"
                  >
                    Return to Safe Heating Guide
                  </button>

                  <button
                    onClick={() => signOut()}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            ) : (
              /* If User is not signed in */
              <div className="space-y-6">
                
                {/* Working Google Login Button */}
                <button
                  onClick={() => signInWithGoogle()}
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 active:bg-stone-100 border border-stone-300 transition-all shadow-xs hover:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {/* Official Google 'G' icon */}
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>{loading ? 'Connecting to Google...' : 'Continue with Google'}</span>
                </button>

                {/* Benefits List */}
                <div className="pt-4 border-t border-stone-100 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                    Why Create an Account?
                  </span>
                  
                  <div className="flex items-start gap-2.5 text-xs text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Save your quiz score and earn the "Master Food Heater" badge</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Store your household Kitchen Checklist verification status</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Personalized reference guides for reheating and oil safety</span>
                  </div>
                </div>

                {/* Guest action */}
                <div className="pt-2 text-center">
                  <button
                    onClick={onBackToApp}
                    className="text-xs text-stone-500 hover:text-stone-900 font-medium transition-colors"
                  >
                    Skip and continue exploring as Guest →
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Privacy Note */}
          <div className="text-center">
            <p className="text-[11px] text-stone-400 max-w-xs mx-auto leading-relaxed">
              We respect your privacy. HeatWise only requests basic profile information to personalize your learning experience.
            </p>
          </div>

        </div>
      </div>

      {/* Footer minimal */}
      <div className="py-6 text-center text-xs text-stone-400 border-t border-stone-200/60">
        HeatWise — Heat Smart. Eat Safe.
      </div>

    </div>
  );
};
