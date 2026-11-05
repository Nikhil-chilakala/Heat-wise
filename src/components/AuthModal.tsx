import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Flame, X, CheckCircle2, AlertCircle, LogOut } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFullPage?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onNavigateToFullPage }) => {
  const { user, loading, error, signInWithGoogle, signOut, clearError } = useAuth();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-3xl max-w-md w-full border border-stone-200 shadow-2xl p-6 sm:p-8 relative space-y-6 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto shadow-xs">
            <Flame className="w-6 h-6 fill-white/20" />
          </div>
          <h3 className="text-xl font-bold text-stone-900 font-display">
            {user ? 'My HeatWise Account' : 'Sign in to HeatWise'}
          </h3>
          <p className="text-xs text-stone-500">
            {user
              ? 'Your profile is active and synced.'
              : 'Save quiz scores and sync your kitchen checklist.'}
          </p>
        </div>

        {/* Error notification */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span>{error}</span>
              <button onClick={clearError} className="block text-[11px] underline mt-1 font-semibold">
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Auth Content */}
        {user ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Profile'}
                  className="w-11 h-11 rounded-full border border-stone-200 object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center">
                  {user.displayName ? user.displayName.charAt(0) : 'U'}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-stone-900 truncate">
                  {user.displayName || 'Home Cook'}
                </p>
                <p className="text-[11px] text-stone-500 truncate">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-orange-600 transition-colors"
              >
                Continue Learning
              </button>
              <button
                onClick={() => {
                  signOut();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Google Sign In Button */}
            <button
              onClick={async () => {
                await signInWithGoogle();
                // If succeeded, can close or remain open
              }}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-3 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-all shadow-xs hover:shadow-sm cursor-pointer disabled:opacity-60"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
              <span>{loading ? 'Connecting...' : 'Sign in with Google'}</span>
            </button>

            {/* Quick points */}
            <div className="space-y-2 pt-2 text-stone-600 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant 1-click Google authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Save checklist verification and quiz score</span>
              </div>
            </div>

            {onNavigateToFullPage && (
              <div className="pt-2 text-center border-t border-stone-100">
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToFullPage();
                  }}
                  className="text-xs text-amber-700 hover:text-amber-800 font-medium"
                >
                  Open dedicated login page →
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
