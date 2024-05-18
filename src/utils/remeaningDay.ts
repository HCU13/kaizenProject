export const calculateRemainingDays = (date: string): string => {
  // Verilen tarihi parçalayarak gün, ay ve yıl değerlerini alıyoruz
  const [day, month, year] = date.split('.').map(Number);

  // Belirtilen tarihi oluşturuyoruz (aylar 0'dan başladığı için ay değerine 1 çıkarmamız gerekiyor)
  const targetDate = new Date(year, month - 1, day);

  // Bugünkü tarihi alıyoruz
  const today = new Date();

  // Hedef tarihi bugünden çıkarıp kalan gün sayısını hesaplıyoruz
  const differenceInTime = targetDate.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  // Eğer hedef tarih bugünden önceyse "0 gün kaldı" yerine "Geçmiş" döndürelim
  return differenceInDays > 0 ? `son ${differenceInDays} gün` : 'Geçmiş';
};
