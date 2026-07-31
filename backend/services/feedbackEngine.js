// =========================================
// ChatTBM V6.0.4
// Feedback Engine
// Learns from user actions
// =========================================

class FeedbackEngine {
    constructor() {
        this.feedbackHistory = [];
    }

    /**
     * Record feedback from a user action
     */
    recordFeedback(userId, action, data = {}) {

        const feedback = {
            userId,
            action,
            timestamp: Date.now(),
            data
        };

        this.feedbackHistory.push(feedback);

        return feedback;
    }

    /**
     * Get all feedback for one user
     */
    getUserFeedback(userId) {
        return this.feedbackHistory.filter(
            item => item.userId === userId
        );
    }

    /**
     * Count how many times an action occurred
     */
    getActionCount(userId, action) {

        return this.feedbackHistory.filter(
            item =>
                item.userId === userId &&
                item.action === action
        ).length;

    }

    /**
     * Clear feedback history
     */
    clearUserFeedback(userId) {

        this.feedbackHistory =
            this.feedbackHistory.filter(
                item => item.userId !== userId
            );

    }
}

module.exports = new FeedbackEngine();
