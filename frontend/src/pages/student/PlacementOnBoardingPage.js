import React from 'react';
import PageShell from '../components/PageShell/PageShell';
import { PageHead, Card, Btn, Chip, Field, Lines } from '../components/common/Primitives';
import { I } from '../components/common/Icons';

export default function OnboardingPage() {
  return (
    <PageShell role="student">
      <PageHead
        crumb="Onboarding · Step 1 of 3"
        title="Set up your internship placement"
        sub="You'll unlock your dashboard once your placement is approved."
        actions={<><Btn kind="ghost" sm>Save draft</Btn><Btn kind="primary" sm>{I.arrow} Submit for approval</Btn></>}
      />
