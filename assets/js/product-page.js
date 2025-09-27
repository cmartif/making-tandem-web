// Product page specific JavaScript

// Product Gallery functionality
function initProductGallery() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const mainImage = document.querySelector('.product-main-img');
    
    if (galleryImages.length > 0 && mainImage) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                const newSrc = img.src;
                const newAlt = img.alt;
                
                mainImage.src = newSrc;
                mainImage.alt = newAlt;
                
                // Remove active class from all thumbnails
                galleryImages.forEach(thumb => thumb.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                img.classList.add('active');
            });
        });
        
        // Set first image as active by default
        if (galleryImages[0]) {
            galleryImages[0].classList.add('active');
        }
    }
}

// Product Tabs functionality
function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Reviews Modal functionality
function initReviewsModal() {
    const reviewLinks = document.querySelectorAll('.reviews-link, .rating');
    const modal = document.getElementById('reviews-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (modal) {
        // Open modal
        reviewLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Review Form functionality
function initReviewForm() {
    const reviewForm = document.getElementById('review-form');
    const starRatings = document.querySelectorAll('.star-rating');
    
    // Star rating interaction
    starRatings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        const input = rating.querySelector('input[type="hidden"]');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const ratingValue = index + 1;
                
                // Update hidden input
                if (input) {
                    input.value = ratingValue;
                }
                
                // Update visual state
                stars.forEach((s, i) => {
                    if (i < ratingValue) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
            
            // Hover effect
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });
        });
        
        // Remove hover effect when leaving rating area
        rating.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
    
    // Review form submission
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(reviewForm);
            const reviewData = {
                name: formData.get('reviewer-name'),
                email: formData.get('reviewer-email'),
                rating: formData.get('rating'),
                title: formData.get('review-title'),
                comment: formData.get('review-comment')
            };
            
            // Create email for review
            const email = 'hola@makingtandem.com';
            const subject = `Nueva reseña: ${reviewData.title}`;
            const body = `Nueva reseña recibida:\\n\\nNombre: ${reviewData.name}\\nEmail: ${reviewData.email}\\nCalificación: ${reviewData.rating}/5 estrellas\\nTítulo: ${reviewData.title}\\n\\nComentario:\\n${reviewData.comment}`;
            
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
            
            // Close modal
            const modal = document.getElementById('reviews-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            // Reset form
            reviewForm.reset();
            
            // Reset star ratings
            starRatings.forEach(rating => {
                const stars = rating.querySelectorAll('.star');
                stars.forEach(star => star.classList.remove('active'));
            });
        });
    }
}

// Product image zoom functionality
function initImageZoom() {
    const mainImage = document.querySelector('.product-main-img');
    
    if (mainImage) {
        mainImage.addEventListener('click', () => {
            // Create modal for zoomed image
            const modal = document.createElement('div');
            modal.className = 'image-zoom-modal';
            modal.innerHTML = `
                <div class="zoom-modal-content">
                    <img src="${mainImage.src}" alt="${mainImage.alt}">
                    <button class="zoom-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Close zoom modal
            const closeBtn = modal.querySelector('.zoom-close');
            const closeModal = () => {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            };
            
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        });
    }
}

// Notification system for user feedback
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    });
}

// Initialize all product page functionality
document.addEventListener('DOMContentLoaded', function() {
    initProductGallery();
    initProductTabs();
    initReviewsModal();
    initReviewForm();
    initImageZoom();
    
    console.log('Product page functionality loaded successfully!');
});