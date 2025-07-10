let authToken = "";

// Tabs
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.style.display = tab.id === id ? 'block' : 'none';
  });
}

// Register
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  const res = await fetch('https://referral-management-system.onrender.com/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(res.ok ? 'Registered successfully!' : data.message || 'Register failed');
});

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const res = await fetch('https://referral-management-system.onrender.com/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok) {
    authToken = data.token;
    alert('Login successful!');
  } else {
    alert(data.message || 'Login failed');
  }
});

// Refer
document.getElementById('candidateForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const res = await fetch('https://referral-management-system.onrender.com/api/candidates', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: formData
  });

  const data = await res.json();
  alert(data.message || 'Candidate submitted');
});

// Load Candidates
async function loadCandidates() {
  const res = await fetch('https://referral-management-system.onrender.com/api/candidates', {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  const data = await res.json();

  const list = document.getElementById('candidateList');
  list.innerHTML = '';

  data.forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `
      <b>${c.name}</b> - ${c.status}<br>
      ${c.email}, ${c.phone}<br>
      <button onclick="updateStatus('${c._id}')">Mark Reviewed</button>
      <button onclick="deleteCandidate('${c._id}')">Delete</button>
    `;
    list.appendChild(li);
  });
}

// Update Status
async function updateStatus(id) {
  const res = await fetch(`https://referral-management-system.onrender.com/api/candidates/${id}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ status: 'Reviewed' })
  });
  await res.json();
  loadCandidates();
}

// Delete Candidate
async function deleteCandidate(id) {
  const res = await fetch(`https://referral-management-system.onrender.com/api/candidates/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${authToken}` }
  });
  const data = await res.json();
  alert(data.message);
  loadCandidates();
}

// Load Metrics
async function loadMetrics() {
  const res = await fetch('https://referral-management-system.onrender.com/api/candidates/metrics', {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  const data = await res.json();
  document.getElementById('metricsDisplay').textContent = JSON.stringify(data, null, 2);
}

// Show default tab on load
showTab('register');
