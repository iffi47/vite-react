/**
 * Custom Redux Hooks
 * Typed hooks for useDispatch and useSelector
 */

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../types';
import type { AppDispatch } from './store';

/**
 * Custom useAppDispatch hook with proper typing
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Custom useAppSelector hook with proper typing
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
