import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Button from '../../components/atoms/Button';
import TextField from '../../components/atoms/TextField';
import AdminRegistrationService from '../../services/admin-registration';
import { RequestVerificationLinkPayload } from '../../services/admin-registration/types';

export default function RequestVerificationLink() {
  const [email, setEmail] = useState('');

  const getNotificationMessageByLanguage = () => {
    const lang = navigator.language;

    switch (lang) {
      case 'id':
        return {
          toastError: 'Email tidak boleh kosong.',
          modalTitle: 'Silahkan cek email Anda',
        };
      default:
        return {
          toastError: 'Email cannot be empty.',
          modalTitle: 'Please check your email',
        };
    }
  };

  const handleSubmit = async (): Promise<void> => {
    const { toastError, modalTitle } = getNotificationMessageByLanguage();
    if (email === '') {
      toast.error(toastError);
      return;
    }

    const requestVerificationLinkPayload: RequestVerificationLinkPayload = { email };
    const res = await AdminRegistrationService
      .requestVerificationLink(requestVerificationLinkPayload);

    if (res.error) {
      toast.error(res.message);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: modalTitle,
        showConfirmButton: true,
      });
    }

    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Kirim Ulang Verifikasi - Digital Community Bank</title>
      </Head>
      <div className="kc-wrapper">
        <div className="kc-rvl--wrapper">
          <div className="kc-rvl--content">
            <h2 className="kc-headline5">Kirim Verifikasi Email</h2>
            <div className="kc-input">
              <TextField
                _size="large"
                placeholder="email@example.com"
                type="text"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <Button label="Kirim" size="long" onClick={handleSubmit} />
            <div className="kc-login-box--caption">
              <p className="kc-caption">
                Kembali ke halaman login -
                <Link href="/"> Klik disini</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
